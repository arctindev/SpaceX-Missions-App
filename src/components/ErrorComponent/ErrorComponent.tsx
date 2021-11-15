import React from 'react';
import { ErrorWrapper, ErrorText } from './ErrorComponent.styles';

export const ErrorComponent = () => {
    return (
        <ErrorWrapper>
            <ErrorText>Something went wrong, try to refresh the page</ErrorText>
        </ErrorWrapper>
    )
}