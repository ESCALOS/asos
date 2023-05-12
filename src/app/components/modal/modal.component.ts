import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() abrirModal = new EventEmitter<void>();

  constructor(){};

  openModalSearch(){
    this.abrirModal.emit();
    console.log('open modal search');
  }
}
