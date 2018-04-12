import Dialog from 'ember-athlas-modal/components/form-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogThree extends Dialog {

  bodyComponent: string = 'dialog-three/body';

  @computed()
  get title() {
    return 'diag-three';
  }

  @computed('athlas.formOkLabel')
  get okLabel() {
    return 'Jup'+ this.athlas.formOkLabel;
  }

  @computed()
  get okClass() {
    return 'btn-danger';
  }
}
