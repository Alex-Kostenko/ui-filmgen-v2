import { TransitionComponent } from '@restart/ui/types';
import NoopTransition from '@restart/ui/NoopTransition';
import { TransitionType } from './helpers';

export default function getTabTransitionComponent(
  transition?: TransitionType
): TransitionComponent | undefined {
  if (typeof transition === 'boolean') {
    return NoopTransition;
  }

  return transition;
}
