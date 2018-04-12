import DummyDialog from 'dummy-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogTwo extends DummyDialog {

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
