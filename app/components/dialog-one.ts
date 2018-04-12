import Dialog from 'ember-athlas-modal/components/form-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogOne extends Dialog {

  bodyComponent: string = 'dialog-one/body';

  @computed()
  get title() {
    return 'diag-one';
  }

  @computed('athlas.formOkLabel')
  get okLabel() {
    return 'Okey'+ this.athlas.formOkLabel;
  }

  @computed()
  get okClass() {
    return 'btn-secondary';
  }
}
