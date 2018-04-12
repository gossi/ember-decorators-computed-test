import Dialog from 'ember-athlas-modal/components/form-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogTwo extends Dialog {

  bodyComponent: string = 'dialog-two/body';

  @computed()
  get title() {
    return 'diag-two';
  }

  @computed('athlas.formOkLabel')
  get okLabel() {
    return 'Yes'+ this.athlas.formOkLabel;
  }

  @computed()
  get okClass() {
    return 'btn-warning';
  }
}
