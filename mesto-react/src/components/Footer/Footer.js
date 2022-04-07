import React from 'react';

function Footer() {
  const [date, setDate] = React.useState();
  const getYear = () => setDate(new Date().getFullYear())
  React.useEffect(() => {
    getYear();
  }, [])

  return (
    <div className="Footer">
      <footer className="footer">
        <p className="footer__copyright">©{date} Mesto Russia</p>
      </footer>
    </div>
  );
}

export default Footer;