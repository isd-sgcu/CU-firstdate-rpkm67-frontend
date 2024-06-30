import Image from 'next/image';
import Divider from '@public/congrats/divider.svg';
import ReactMarkdown from 'react-markdown';
import { conditionMarkdown } from '@/components/congratulation/conditionMarkdown';
import {
  HeadingProps,
  LiProps,
  OrderedListProps,
} from 'react-markdown/lib/ast-to-react';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import '@/components/congratulation/style.css';

const StyledH1: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <h1
      className="text-center font-medium whitespace-pre-wrap"
      {...props}
    >
      {children}
    </h1>
  );
};

const StyledP: React.FC<ReactMarkdownProps> = ({ children, ...props }) => {
  return (
    <p
      className="text-xs whitespace-pre-wrap"
      {...props}
    >
      {children}
    </p>
  );
};

const StyledLI: React.FC<LiProps> = ({ children, ...props }) => {
  return (
    <li
      className="text-xs whitespace-pre-wrap"
      {...props}
    >
      {children}
    </li>
  );
};

const StyledOL: React.FC<OrderedListProps> = ({ children, ...props }) => {
  return (
    <ol
      className="flex flex-col pl-4 gap-3"
      style={{ listStyleType: 'decimal' }}
      {...props}
    >
      {children}
    </ol>
  );
};

const StyledHR: React.FC<ReactMarkdownProps> = ({ ...props }) => {
  return (
    <hr
      className="border border-project-dark-gray"
      {...props}
    />
  );
};

const ConditionContext = () => {
  return (
    <>
      <span className="text-center font-athiti font-semibold text-2xl">
        เงื่อนไขการได้รับของรางวัล
      </span>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[20%] my-3"
      />
      <div className="flex flex-1 flex-col overflow-y-scroll font-athiti ml-[10%] mr-[9%] pr-1 whitespace-pre-line">
        <ReactMarkdown
          components={{
            h1: StyledH1,
            p: StyledP,
            li: StyledLI,
            ol: StyledOL,
            hr: StyledHR,
          }}
          className="flex flex-col text-base font-athiti gap-3"
        >
          {conditionMarkdown}
        </ReactMarkdown>
      </div>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[20%] mt-6"
      />
    </>
  );
};

export default ConditionContext;
