import { Container } from "@material-ui/core";
import Header from "./Header";
import { Helmet } from "react-helmet";

function PageLayout({ children, title, containerProps = {} }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      <Container {...containerProps}>{children}</Container>
    </>
  );
}

export default PageLayout;
