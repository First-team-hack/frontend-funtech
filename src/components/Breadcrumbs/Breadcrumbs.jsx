import { useLocation } from 'react-router';
import './Breadcrumbs.css';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../utils/constants';

function Breadcrumbs() {
  const location = useLocation();
  const { pathname } = location;
  // arr.filter((el) => el) удаляет undefined сущности, например пустые строки
  const pathnames = pathname.split('/').filter((el) => el);
  return (
    <div className="breadcrumbs">
      {pathname === '/' ? (
        <Link className="breadcrumbs__item breadcrumbs__item_type_link" to="/">
          {ROUTE_NAMES['/']}
        </Link>
      ) : (
        pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          console.log(pathname);
          return isLast ? (
            <p className="breadcrumbs__item" key={index}>
              {pathname === '/' ? ROUTE_NAMES['/'] : ROUTE_NAMES['/' + pathname]}
            </p>
          ) : (
            <>
              <Link
                key={index}
                to={`${routeTo}`}
                className="breadcrumbs__item breadcrumbs__item_type_link"
              >
                {pathname === '/' ? ROUTE_NAMES['/'] : ROUTE_NAMES['/' + pathname]}
              </Link>
              <span className="breadcrumbs__divider" />
            </>
          );
        })
      )}
    </div>
  );
}

export default Breadcrumbs;
