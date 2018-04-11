import DummyDialog from 'ember-decorators-computed-test/components/dummy-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogOne extends DummyDialog {

  bodyComponent: string = 'dialog-one/body';

  @computed
  get title() {
    return 'diag-one';
  }

  @computed
  get okLabel() {
    return 'Okey';
  }

  @computed
  get okClass() {
    return 'btn-secondary';
  }
}
