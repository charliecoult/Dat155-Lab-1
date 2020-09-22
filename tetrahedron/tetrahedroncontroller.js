"use strict";

/**
 * Controller for the tetrahedron project.
 */
class Tetrahedroncontroller {

    /**
     * Creates a new Tetrahedroncontroller object.
     */
    constructor() {
        this._model = new Tetrahedrondata();
        this._view = new Tetrahedrongl(this._model);
    }

    /**
     * Changes the rotation axis.
     */
    xButtonClicked() {
        this._view.axis = X_AXIS;
    }

    /**
     * Changes the rotation axis.
     */
    yButtonClicked() {
        this._view.axis = Y_AXIS;
    }

    /**
     * Changes the rotation axis.
     */
    zButtonClicked() {
        this._view.axis = Z_AXIS;
    }

}


