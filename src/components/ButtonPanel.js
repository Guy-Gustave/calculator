import React from 'react';
import Button from './Button';
import '../index.css';

export default function ButtonPanel() {
  const Group1 = ['AC', '+/-', '%', '÷'];
  const Group2 = ['  7  ', '  8  ', '  9  ', 'x'];
  const Group3 = ['4', '5', '6', '-'];
  const Group4 = ['1', '2', '3', '+'];
  const Group5 = ['0', '.', '='];

  const Groups = [Group1, Group2, Group3, Group4, Group5];

  return (
    <div className="calcul">
      {Groups.map((group) => (
        <div className="group" key={group}>
          {group.map((char) => (
            <Button key={char} className="touche" buttonName={`${char}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
