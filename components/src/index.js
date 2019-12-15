import React from "react";
import ReacDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>ARE U SURE RJLK:AFJ</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeline="2019.09.12"
          content="helllloooo"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeline="2019.09.12"
          content="helllloooo"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeline="2019.09.12"
          content="helllloooo"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector("#root"));
