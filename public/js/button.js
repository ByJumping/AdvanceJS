class Button {
    _text = ''

     constructor (text, callback) {
         this._text = text;
     }

     getTemplate () {
         const btn = document.createElement('button');
         btn.classList.add('btn');

         return btn;
     }

     render (placeToRender) {
         if (placeToRender) {
            const btn = this.getTemplate();
            btn.innerHTML = this._text;
            placeToRender.appendChild(btn);

            btn.addEventListener('click', () => {
                new CartItem(this)
            })
         }
     }
}