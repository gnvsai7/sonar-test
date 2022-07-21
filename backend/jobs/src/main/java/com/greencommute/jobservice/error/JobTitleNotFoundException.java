package com.greencommute.jobservice.error;

public class JobTitleNotFoundException extends Exception {
    public JobTitleNotFoundException() {
        super();
    }

    public JobTitleNotFoundException(String message) {
        super(message);
    }

    public JobTitleNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public JobTitleNotFoundException(Throwable cause) {
        super(cause);
    }

    protected JobTitleNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
