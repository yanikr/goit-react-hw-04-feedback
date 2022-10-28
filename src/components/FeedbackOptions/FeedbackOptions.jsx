import { FeedbackButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <FeedbackButton
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </FeedbackButton>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
