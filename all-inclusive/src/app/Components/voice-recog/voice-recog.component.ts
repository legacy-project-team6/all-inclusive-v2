import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'


declare const responsiveVoice: any;
declare const webkitSpeechRecognition: any;

@Component({
  selector: 'app-voice-recog',
  templateUrl: './voice-recog.component.html',
  styleUrls: ['./voice-recog.component.css']
})
export class VoiceRecogComponent implements OnInit {
  choice: string = '';
  pick : string ;
  public recognition = new webkitSpeechRecognition();
  words: string = '';
  welcome: string = 'welcome! if you need some help say, yes, else say, no';
  phone: number;

  constructor(private dataService: DataService) { }

  startAsking() {
    console.log('Starting The Question');
  }

  ngOnInit(): void {
    this.voiceGuide();
    setTimeout(() => {
      if (this.choice.length) {
        return responsiveVoice.speak(
          'congratulation its available! please give us your number phone so we can contact you',
          'UK English Female',
          {
            onstart: this.startAsking,
            onend: () => {
              this.recognition.start();
              this.recognition.lang = 'en-GB';
              this.recognition.addEventListener('result', (record) => {
                const transcript = Array.from(record.results)
                  .map((result) => result[0])
                  .map((result) => result.transcript)
                  .join('');
                this.words = transcript;
                console.log(transcript);
                if (transcript) {
                  this.phone = Number(transcript);
                  responsiveVoice.speak(
                    'we got your request! thank you for visiting us!'
                  );
                      // creating a request and saving it in Database 
                      console.log(this.choice.split(';').pop())
                      console.log(this.choice.substring(0,this.choice.indexOf(';')))
                      this.dataService.addDisableRequest({type: this.choice.substring(0,this.choice.indexOf(';')),phone: this.phone}).subscribe(response => {
                        console.log(response)
                      })
                }
              });
            },
          }
        );
      } else {
        responsiveVoice.speak(
          'sorry! i think we misheard you, could you refresh and repeat please?'
        );
      }
    }, 25000);
  }
  voiceGuide(welcome = this.welcome) {
    if (this.words === '') {
      welcome = this.welcome;
    }
    var params = {
      onstart: this.startAsking,
      onend: () => {
        this.recognition.start();
        this.recognition.lang = 'en-GB';
        this.recognition.addEventListener('result', (record) => {
          const transcript = Array.from(record.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join('');
          this.words = transcript;
          if (transcript.toLowerCase() === 'yes') {
            return this.voiceGuide(
              'what kind of events do you want to join?and please wait a moment so we can check its availability'
            );
          } else if (transcript.toLowerCase() === 'no') {
            return;
          } else if (transcript.toLowerCase().length !== 0) {
            this.choice += transcript + ';'
          } else {
            return this.voiceGuide('thank you for vising us!');
          }
        });
      },
    };
    responsiveVoice.speak(welcome, 'UK English Female', params);
  }
}
