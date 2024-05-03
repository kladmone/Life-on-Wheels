import css from './homePage.module.css';
const homePage = () => {
  return (
    <div>
      <div className={css.titleBox}>
        <h1 className={css.homeTitle}>Life on Wheels</h1>
      </div>
      <div>
        <h2 className={css.subtitle}>Service Description:</h2>
        <p className={css.compDescription}>
          "Life on Wheels" is a company specializing in the sale and servicing
          of camper vans. We offer a wide range of RVs of various sizes and
          configurations to meet the diverse needs and budgets of our customers.
        </p>
      </div>
    </div>
  );
};

export default homePage;
