import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Greylytica'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.aggreylelei.com">www.aggreylelei.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/Aggre7/greylytica">
              https://github.com/Aggre7/greylytica
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.aggreylelei.com/contact/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
