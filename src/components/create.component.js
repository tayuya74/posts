import {Component} from '../core/component'
import {Form} from '../core/form'
import { Validators } from '../core/validators'

export class CreateComponent extends Component {
  constructor(id) { 
  super(id)
}
  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))
    this.form = new Form(this.$el, {
      title: [Validators.requred],
      fulltext: [Validators.requred, Validators.minLength(10)]
    })
  }
}

function submitHandler(event) {
  event.preventDefault()

  if (this.form.isValid()) {
    const formdata = {
      type: this.$el.type.value,
      ...this.form.value()
    }

    this.form.clear()
  }}