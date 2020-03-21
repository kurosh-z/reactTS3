import React, { useState, useEffect } from 'react';
import { css as emoCss, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme/types';
import Integral from './math-components/Integral';
import Group from './math-components/Group';
import Symb from './math-components/Symb';
import Power from './math-components/Power';
import Symbs from './math-components/Symbs';
import MathJaxNode from '../mathjax/MathJaxNode';

const tex = ` f(x) = \\int_{-\\infty}^\\infty\\hat{f}(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi `;

const Prob01: React.FC<{}> = () => {
  const theme = useTheme<Theme>();
  // const [textHovered, setTextHover] = useState<boolean>(false);
  // useEffect(() => {
  //   const expEl = document.querySelectorAll('.power_exp');
  //   expEl.forEach((el, idx) => {
  //     el.addEventListener('click', () => {
  //       setTextHover(true);
  //       console.log('onmouseover');
  //     });
  //   });
  // }, []);
  const prob01 = emoCss({
    backgroundColor: theme.palette.white.dark,
    width: '100vw',
    height: '30vh'
  });
  const mathsvg = emoCss({
    background: 'transparent'
  });

  const mathexpression = emoCss({
    '.katexfont': {
      fontFamily: 'KaTeX_Main',
      fontSize: '1.2rem',
      lineHeight: '1.2rem',

      '.letter': {
        fontFamily: 'KaTeX_Size2',
        fontStyle: 'italic'
        // fontWeight: 'bold'
      },
      '.number': {
        fontFamily: 'KaTex_Main'
      },
      '.operator': {
        fontFamily: 'KaTeX_Size2',
        fontSize: '1em'
      },
      '.power_exp': {
        fontSize: '.7em'
      },
      '.int_from , .int_to': {
        fontSize: '.85em'
      }
    }
  });

  return (
    <div css={prob01}>
      <Global styles={mathexpression} />

      <svg
        css={mathsvg}
        className='katexfont'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width={600}
        height={'100%'}>
        {/* <Symbs symbs='ABCDEF\beta\alpha\gamma kd' x={100} y={200} /> */}
        <Integral x={100} y={100}>
          <Symbs symbs={'f(x)'} x={0} y={0} />
          <Symbs symbs={'g(x)'} x={0} y={0} />
          <Symbs symbs={'h(x)'} x={0} y={0} />
        </Integral>
      </svg>
      {/* <MathJaxNode
        formula={tex}
        inline
        style={{ position: 'absolute', top: 400, left: 200 }}
      /> */}
    </div>
  );
};

export default Prob01;

const El = ({ x, y }) => {
  return (
    <>
      <Symbs symbs={'g(x)'} x={x} y={y} />
      <El2 x={x + 40} y={y} />
    </>
  );
};

const El2 = ({ x, y }) => {
  return (
    <>
      <Symbs symbs={'p(y)'} x={x} y={y} />
    </>
  );
};
