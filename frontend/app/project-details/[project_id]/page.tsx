import React from 'react'

interface Props {
  params: Promise<{
    project_id: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { project_id } = await params;
  return <div>Project ID is {project_id}</div>;
};

export default page