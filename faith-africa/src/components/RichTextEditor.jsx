import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

/**
 * @param {{ value: string, onChange: (v: string) => void, placeholder?: string }} props
 */
const RichTextEditor = ({ value, onChange, placeholder }) => {
  const formats = useMemo(
    () => ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link'],
    []
  );

  return (
    <div className="rich-text-editor rounded-xl border border-brand-border bg-brand-card overflow-hidden">
      <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} formats={formats} placeholder={placeholder} />
    </div>
  );
};

export default RichTextEditor;
