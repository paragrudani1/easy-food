import { useRouter } from "next/router";
import classes from "./product.module.css";
import Image from "next/image";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <section>
      <div className={classes.Image_Container}>
        <IconButton className={classes.CloseButton}>
          <Close />
        </IconButton>
        <div className={classes.Image}>
          <Image
            src={"/assets/foods/food-1.jpg"}
            width="425"
            height="287"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={classes.Title}>
          <h1>sunday breakfast</h1>
      </div>
    </section>
  );
};

export default Post;
