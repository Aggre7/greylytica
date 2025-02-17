const useDate = ({ settings }) => {
  const { greylytica_app_date_format } = settings;

  const dateFormat = greylytica_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
