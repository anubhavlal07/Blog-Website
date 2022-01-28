import {
  Button,
  makeStyles,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const Styles = makeStyles({
  create: {
    margin: 15,
    background: "#b82e1f",
    color: "#ffffff",
    width: "80%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const Categories = () => {
  const classes = Styles();
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={"/"} className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default Categories;
