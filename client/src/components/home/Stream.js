import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Stream.scss";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import domain from "../../util/domain";
import { Helmet } from "react-helmet";
import Janus from './janus';
import $ from "jquery";
import bootbox from "bootbox";
import toastr from "toastr";
import Spinner from "spin";
import StreamingTest from "./streamingtest";

// function Stream() {

//     const { user } = useContext(UserContext);

//     return (
//         <div className="home">
//             {(user && (
//                 <div className="no-user-message">
//                     <h2>Here is the stream</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }


function Stream() {


    return (
        <div className="container">
            <div>
                <Helmet>
                    <script type="text/javascript"
                        src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/7.4.0/adapter.min.js"></script>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

                    <script type="text/javascript"
                        src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js"></script>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js"></script>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>


                    <link rel="stylesheet" href="demo.css" type="text/css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                        type="text/css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css" />
                </Helmet>
            </div>
            <div className="stream">
                <div className="col-md-12">
                    <div className="page-header">
                        <h1>Plugin Demo: Streaming</h1>
                        <button className="btn btn-default" autoComplete="off" id="start">Start</button>
                    </div>
                    <div className="container" id="details">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Demo details</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container hide" id="streams">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Streams <i id="update-streams" className="fa fa-refresh" title="Update list of streams" style={{ cursor: 'pointer' }} /></h3>
                                    </div>
                                    <div className="panel-body" id="list">
                                        <div className="btn-group btn-group-sm">
                                            <button className="btn btn-primary" autoComplete="off" id="watch">Watch or
                                                Listen</button>
                                            <div className="btn-group btn-group-sm">
                                                <button autoComplete="off" id="streamset" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    Streams list<span className="caret" />
                                                </button>
                                                <ul id="streamslist" className="dropdown-menu" role="menu">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Stream
                                        <span className="label label-info hide" id="status" />
                                        <span className="label label-primary hide" id="curres" />
                                        <span className="label label-info hide" id="curbitrate" />
                                    </h3>
                                </div>
                                <div className="panel-body" id="stream" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stream;