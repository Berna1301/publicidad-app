import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  openTermsModal() {
    document.getElementById('termsModal')?.style.setProperty('display', 'flex');
  }

  closeTermsModal() {
    document.getElementById('termsModal')?.style.setProperty('display', 'none');
  }

  acceptTerms() {
    const checkbox = <HTMLInputElement>document.getElementById('termsCheckbox');

    if (!checkbox.checked) {
      alert('Debes aceptar los términos y condiciones antes de continuar.');
      return;
    }

    const message = "Hola Dev Course, quiero saber más sobre sus servicios. Estoy interesado en tus ofertas.";
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = 'https://wa.me/526183017524?text=' + encodedMessage;
    window.open(whatsappUrl, '_blank');

    this.closeTermsModal();
  }
}
