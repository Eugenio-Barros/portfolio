import { useState } from "react";
import {
  TabList,
  Container,
  Details,
  TabOption,
  WorkList,
  Time,
  Arrow,
  DetailsRow,
} from "./styles";

const Work = () => {
  const [selected, setSelected] = useState(0);

  const workHistory = [
    {
      company: "Pulll&Bear",
      title: "Retail Operator",
      time: "December 2022 - February 2023",
      details: [
        "Added new ideas that helped improve team performance and sales",
        "Working directly with the clients helped me improve my communication skills and emotional intelligence",
      ],
    }
    
  ];

  return (
    <Container>
      <h2>() {"==>"} My work journey</h2>
      <WorkList>
        <TabList>
          {workHistory.map((workHistory, index) => (
            <TabOption
              key={index}
              onClick={() => setSelected(index)}
              active={index === selected}
            >
              {workHistory.company}
            </TabOption>
          ))}
        </TabList>

        <Details>
          <h3>{workHistory[selected].title}</h3>
          <Time>{workHistory[selected].time}</Time>
          {workHistory[selected].details.map((detail, index) => (
            <DetailsRow key={index}>
              <Arrow>{"==>"}</Arrow>
              <p>{detail}</p>
            </DetailsRow>
          ))}
        </Details>
      </WorkList>
    </Container>
  );
};

export default Work;
