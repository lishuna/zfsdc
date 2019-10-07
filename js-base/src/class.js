class Modal{
	constructor(height,width){
    	this.height = height || 100;
      this.width = width || 100;
    }
  getLayout(){
  	return {
    height: this.height,
      width: this.width
    }
  }
  static show(){
  	console.log('show');
  }
}

class subModal extends Modal{
  constructor(){
    // super();
  }
}
let modal = new subModal();
console.log(modal);