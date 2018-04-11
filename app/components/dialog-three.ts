import DummyDialog from 'ember-decorators-computed-test/components/dummy-dialog';
import { computed } from '@ember-decorators/object';

export default class DialogThree extends DummyDialog {

  bodyComponent: string = 'dialog-three/body';

  @computed
  get title() {
    return 'diag-three';
  }

  @computed
  get okLabel() {
    return 'Jup';
  }

  @computed
  get okClass() {
    return 'btn-danger';
  }
}
