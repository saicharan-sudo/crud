import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document:any,
  ){}

  obiServer:string = "https://jsl.prod.obi.aol.com/obipmservice";
  OTT_SERVER_DOMAIN:string = "https://cloudforlife.verizon.com/"
  private reloadCheck = false;


  ngOnInit(): void {
    this.loadFile();
  }

  loadFile(){

    const win = eval('window');
    if (!win.obick) {
        if (this.reloadCheck) {
            const okCB = function(){
                // const amLogOutUrl = this.data.getProps('AM_LOGOUT_URL');
                // const logoutUrl = amLogOutUrl + '?next=' + encodeURIComponent(this.data.getProps('OTT_SERVER_DOMAIN') + 'ott/');
                // this._document.location.href = logoutUrl;
            };
            const msg = 'Please try again later.';
            alert(msg);
            // this.errorPopUp(msg, okCB);
        } else {
            this.reloadCheck = true;
            setTimeout(() => { this.loadFile(); }, 500);
        }
        return;
    }

    const s = this._renderer2.createElement('script');
    s.type = `text/javascript`;
    s.text = `
        window.cardInput = obick(
    {
        serverUrl: "${this.obiServer}" // Development only
    })
    .then(
        function (checkout) {
        console.log(checkout,"checkout");
            return checkout.input({
                //onSubmit: startCheckout,
                theme: {
                    iframe: {
                     style:  "${window.location.origin}/assets/example.css",
                        cardNumber: {
                            style: function(field) {
                                return {
                                    "::disabled": field.input.status().generatingToken,
                                    "border": "10px solid red"
                                };
                            }
                        },
                        cvv: {
                            style: function(field) {
                                return {
                                    "::disabled": field.input.status().generatingToken,
                               };
                            }
                        }
                    }
                }
            }).then(
                function (input) {
                    return input;
                },
                function (error) {
                    //window.console && window.console.error("Failed to create input", error);
                });
        },
        function (error) {
            window.console && window.console.error("Failed to initialize checkout", error);
        });

    `;
    this._renderer2.appendChild(this._document.body, s);
  }

}
