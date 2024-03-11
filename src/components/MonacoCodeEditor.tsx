import React, {useCallback, useRef} from 'react';
import type EditorType from 'monaco-editor';
import {BeforeMount, Editor} from '@monaco-editor/react';
import { languageId, startStatemachineClient } from '../statemachineClient';

export const ReactMonacoEditor: React.FC = () => {
    const monacoRef = useRef<typeof EditorType>();

    const beforeMount = useCallback<BeforeMount>((monaco) => {
        startStatemachineClient();
        monacoRef.current = monaco;
    }, []);

    return (
        <Editor
            beforeMount={beforeMount}
            defaultPath='inmemory://example.statemachine'
            height='80vh'
            value={'statemachine Example'}
            language={languageId}
        />
    );
};