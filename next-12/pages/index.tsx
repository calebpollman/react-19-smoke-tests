import styles from "../styles/Home.module.css";
import { DropdownMenu, DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { Button, Menu } from "@aws-amplify/ui-react";

export type ButtonPropTypes = typeof Button.propTypes;
// verify correct extension of `React.ForwardRefExoticComponent`
export type ButtonDefaultProps = typeof Button.defaultProps;

const props: DropdownMenuProps = {
  open: true,
  children: <p>Kids!</p>,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <DropdownMenu {...props} />
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Hey!</h1>
      </main>
    </div>
  );
}
