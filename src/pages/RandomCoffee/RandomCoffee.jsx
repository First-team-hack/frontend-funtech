import './RandomCoffee.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

function RandomCoffee() {
  return (
    <main className="random-coffee">
      <div className="random-coffee__container">
        {' '}
        <Breadcrumbs />
      </div>
    </main>
  );
}

export default RandomCoffee;
