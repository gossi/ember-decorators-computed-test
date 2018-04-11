import DummyDialog from 'ember-decorators-computed-test/components/dummy-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogTwo extends DummyDialog {

  bodyComponent: string = 'dialog-two/body';

  @computed
  get title() {
    return 'diag-two';
  }

  @computed
  get okLabel() {
    return 'Yas';
  }

  @computed
  get okClass() {
    return 'btn-warning';
  }
}
