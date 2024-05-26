import React from "react";
import { Blocks } from "react-loader-spinner";
import Flex from "./Flex";

const Loading = () => {
  return (
    <Flex className={"items-center justify-center"}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </Flex>
  );
};

export default Loading;
