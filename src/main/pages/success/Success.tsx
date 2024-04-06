import { Result } from 'antd';
import { SchedulePropsData } from '../../../Types';
import './Success.css'


const Success = (props : SchedulePropsData) => (
    <Result className='success-container'
    status="success"
    title={`Thank you, ${props.fullName}. We have received your request.`}
    subTitle={`We will send you a confirmation email at ${props.email}.`}
  />
);

export default Success;
