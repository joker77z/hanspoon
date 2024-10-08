import { Card } from '../Card/Card';
import { Heading } from '../Heading/Heading';
import styles from './HotRecipes.module.scss';

export function HotRecipes() {
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.hotRecipes}>
        HotRecipes
      </Heading>
      <ul className={styles.cardItems}>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
        <li className={styles.item}>
          <Card
            type="square"
            background="none"
            hasSummary={false}
            headingPosition="bottomCenter"
            imgSrc="http://placehold.it/312x230"
            title="Easy Strawberry Cake"
            summary={`Cream Sherry, Moscato d'Asti, and Port are great choices  ...`}
          />
        </li>
      </ul>
    </section>
  );
}
