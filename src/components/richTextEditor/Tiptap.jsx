import './Tiptap.css';


import {EditorContent, useEditor, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {useEffect,useRef} from 'react'
import {Editor} from "@tiptap/react";
import {
    ArrowClockwise,
    ArrowCounterClockwise,
    Broom, ListBullets, ListNumbers,
    Paragraph,
    TextB, TextHFive, TextHFour,
    TextHOne, TextHSix,
    TextHThree,
    TextHTwo,
    TextItalic,
    TextStrikethrough
} from "@phosphor-icons/react";



const Menu = function Menu({ editor }){
    if (!editor) {
        return null
    }

    return (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className="bubble-menu">
                <TextB size={24} alt="Bold"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                />
                <TextItalic size={24} alt="Itallic"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                />
                <TextStrikethrough size={24} alt="Strike trough"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                />
                <Broom size={24} alt="Clear styling"
                       onClick={() => {
                        editor.chain().focus().unsetAllMarks().run();
                        editor.chain().focus().clearNodes().run();
                }}/>
                <Paragraph size={24} alt="Paragraph"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                />
                <TextHOne size={24} alt="H1"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                />

                <TextHTwo size={24} alt="H2"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                />

                <TextHThree size={24} alt="H3"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                />

                <TextHFour size={24} alt="H4"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                />

                <TextHFive size={24} alt="H5"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                />

                <TextHSix size={24} alt="H6"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                />

                <ListBullets size={24} alt="Bullet list"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                />

                <ListNumbers size={24} alt="Ordered list"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                />
                <ArrowCounterClockwise size={24}  alt="Undo"
                         onClick={() => editor.chain().focus().undo().run()}/>

                <ArrowClockwise size={24}  alt="Redo"
                         onClick={() => editor.chain().focus().redo().run()}/>
            </div>
        </BubbleMenu>
    )
}

function Tiptap({content/*="<p>edit</p>"*/, editable=true,menu=true, rhf ,name}) {
    const editor = useEditor({
        onUpdate({editor}) {
            rhf?.setValue(name,editor.getHTML())
        },
        extensions: [
            StarterKit,
        ],
        editable: editable,
        content: content,
        editorProps: {
            attributes: {
                spellcheck: 'false',
            },
        },
    })

    // const editorState = useEditorState({
    //     editor,
    //
    //     selector: ({ editor }) => ({
    //
    //         isBold: editor.isActive('bold'),
    //         isItalic: editor.isActive('italic'),
    //     })
    // })

    useEffect(() => {
        editor.commands.setContent(content);
    }, [content]);


    useEffect(() => {
        rhf?.register(name, {
            required: {
                value: false,
                message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
            }
        });
    }, []);

    return (
        <>
            {name && <label className="inputRichText">{name}
                {editable && menu && <Menu editor={editor}/>}
                <EditorContent editor={editor}/>
            </label>}
            {!name && <>
                {editable && menu && <Menu editor={editor}/>}
                <EditorContent editor={editor}/>
            </>}
        </>
    )
}

export default Tiptap;