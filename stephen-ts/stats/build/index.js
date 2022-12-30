"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("./Summary");
const MatchReader_1 = require("./MatchReader");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
