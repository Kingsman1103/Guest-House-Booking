import React from 'react'
import { Badge, Calendar } from 'antd';
const getListData = (value) => {
  const data = {
      3: {
          12: [
              { type: 'warning', content: '7 Available.' },
              { type: 'success', content: '1 not Available.' },
          ],
          13: [
            { type: 'warning', content: '15 Available.' },
            { type: 'success', content: '1 not Available.' },
        ]
      }, 4: {
          10: [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
          ],
          16: [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
          ]
      },
      5: {
          8: [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event......' },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
          ]

          
      }

     
  }

  return data?.[value.month()]?.[value.date()] || [];
};

const Availability = () => {

  const dateCellRender = (value) => {
      const listData = getListData(value);
      return (
          <ul className="events">
              {listData.map((item) => (
                  <li key={item.content}>
                      <Badge status={item.type} text={item.content} />
                  </li>
              ))}
          </ul>
      );
  };

  const cellRender = (current, info) => {
      if (info.type === 'date') return dateCellRender(current);

      return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

export default Availability;




















