
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Head = ({ titlee = 'Складной V-образный скребок для ферм (комби-скрепер). Купить по отличной цене', description = 'Уникальность скреперов нашего производства в том, что в их конструкции мы используем элементы из износостойкой марки стали импортного производства', children }) => (
  <Helmet>
    <title>{titlee}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {children}
  </Helmet>
);

Head.propTypes = {
  titlee: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Head;
