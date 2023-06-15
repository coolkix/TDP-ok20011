import React from 'react';

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className={"flex justify-center items-center px-10 md:mb-20 mb-10 " + (props.contentFirst ? "md:order-2 order-1" : "order-1")}>
        <div className="w-full lg:w-1/2">
          {props.icon}
        </div>
      </div>
      <div className={"sm:mb-5 mb-2 " + (props.contentFirst ? "order-1 " : "md:order-2 order-1 ") + (props.separator && "pb-14") }>
        <div className={"bg-df rounded-3xl h-full pt-10 lg:pr-10 px-8 lg:pl-24 text-white " + (!props.separator ? "pb-16" : "pb-4")} style={{ margin: '0 20px' }}>
          <h2 className="font-bold text-2xl mb-1.5">
            {props.title}
          </h2>
          <p>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AboutSectionProps {
  title: string;
  content: string;
  icon: JSX.Element;
  contentFirst?: boolean;
  separator?: boolean;
}