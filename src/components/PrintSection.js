import React, { Component } from 'react';



class PrintSection extends Component {
  constructor(props) {
    super(props);

    this.handleClickPrint = this.handleClickPrint.bind(this);
  }

  handleClickPrint() {

    const printButton = document.querySelector('#print-cv');
    let newHead = document.querySelector('head');
    const title =document.title;
    const pdfCv = document.getElementById('cv_part');
    pdfCv.style.display = "block";
    newHead = document.head.innerHTML;

    const popupWin = window.open('', '', 'left=0,top=0,width=800,height=900');
    popupWin.document.open();
    popupWin.document.write(newHead);
    popupWin.document.write(pdfCv.innerHTML);
    popupWin.document.close();

    popupWin.addEventListener('load', function() {
      popupWin.print();//función que imprime el contenido
      // popupWin.print(pdfCv.innerHTML);
    });

  }
  render() {
    return (
      <div>
      <input id="print-cv" onClick  = {this.handleClickPrint} className="rounded-primaryColor-width100-button print-button text-center colored1-button-typo" id="print" type="submit" defaultValue="imprimir cv" />
      </div>
    );
  }
}

export default PrintSection;
