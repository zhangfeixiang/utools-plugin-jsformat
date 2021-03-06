(function () {
    function l(b, d, h, e, f, a) {
        d[b] && (h.push(b), (d[b] === !0 || d[b] === 1) && e.push(f + b + "/" + a))
    }

    function p(b, d, h, e, f) {
        d = e + d + "/" + f;
        require._fileExists(b.toUrl(d + ".js")) && h.push(d)
    }

    function o(b, d, h) {
        for (var e in d) d.hasOwnProperty(e) && (!b.hasOwnProperty(e) || h) ? b[e] = d[e] : typeof d[e] === "object" && o(b[e], d[e], h)
    }
    var e = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;
    define("i18n", ["module"],
        function (b) {
            var d = b.config ? b.config() : {};
            return {
                version: "2.0.1+",
                load: function (b, k, f, a) {
                    a = a || {};
                    if (a.locale) d.locale = a.locale;
                    var c = e.exec(b),
                        i = c[1],
                        m = c[4],
                        n = c[5],
                        j = m.split("-"),
                        q = [],
                        r = {},
                        t,
                        v = "";
                    if (c[5]) i = c[1],
                        b = i + n;
                    else {
                        n = c[4];
                        m = d.locale;
                        if (!m) m = d.locale = typeof navigator === "undefined" ? "root" : (navigator.language || navigator.userLanguage || "root").toLowerCase();
                        j = m.split("-")
                    }
                    if (a.isBuild) {
                        q.push(b);
                        p(k, "root", q, i, n);
                        for (t = 0; t < j.length; t++) a = j[t],
                            v += (v ? "-" : "") + a,
                            p(k, v, q, i, n);
                        k(q,
                            function () {
                                f()
                            })
                    } else k([b],
                        function (g) {
                            var u = [],
                                a;
                            l("root", g, u, q, i, n);
                            for (t = 0; t < j.length; t++) a = j[t],
                                v += (v ? "-" : "") + a,
                                l(v, g, u, q, i, n);
                            k(q,
                                function () {
                                    var a, c, x;
                                    for (a = u.length - 1; a > -1 && u[a]; a--) {
                                        x = u[a];
                                        c = g[x];
                                        if (c === !0 || c === 1) c = k(i + x + "/" + n);
                                        o(r, c)
                                    }
                                    f(r)
                                })
                        })
                }
            }
        })
})();
define("orion/editor/i18n", {
    load: function (l, p, o) {
        p.specified && p.specified("orion/bootstrap") ? p(["orion/i18n!" + l],
            function (e) {
                o(e)
            }) : o({})
    }
});
define("orion/editor/nls/root/messages", {
    multipleAnnotations: "Multiple annotations:",
    line: "Line: ${0}",
    breakpoint: "Breakpoint",
    bookmark: "Bookmark",
    task: "Task",
    error: "Error",
    warning: "Warning",
    matchingSearch: "Matching Search",
    currentSearch: "Current Search",
    currentLine: "Current Line",
    matchingBracket: "Matching Bracket",
    currentBracket: "Current Bracket",
    lineUp: "Line Up",
    lineDown: "Line Down",
    lineStart: "Line Start",
    lineEnd: "Line End",
    charPrevious: "Previous Character",
    charNext: "Next Character",
    pageUp: "Page Up",
    pageDown: "Page Down",
    scrollPageUp: "Scroll Page Up",
    scrollPageDown: "Scroll Page Down",
    scrollLineUp: "Scroll Line Up",
    scrollLineDown: "Scroll Line Down",
    wordPrevious: "Previous Word",
    wordNext: "Next Word",
    textStart: "Document Start",
    textEnd: "Document End",
    scrollTextStart: "Scroll Document Start",
    scrollTextEnd: "Scroll Document End",
    centerLine: "Center Line",
    selectLineUp: "Select Line Up",
    selectLineDown: "Select Line Down",
    selectWholeLineUp: " Select Whole Line Up",
    selectWholeLineDown: "Select Whole Line Down",
    selectLineStart: "Select Line Start",
    selectLineEnd: "Select Line End",
    selectCharPrevious: "Select Previous Character",
    selectCharNext: "Select Next Character",
    selectPageUp: "Select Page Up",
    selectPageDown: "Select Page Down",
    selectWordPrevious: "Select Previous Word",
    selectWordNext: "Select Next Word",
    selectTextStart: "Select Document Start",
    selectTextEnd: "Select Document End",
    deletePrevious: "Delete Previous Character",
    deleteNext: "Delete Next Character",
    deleteWordPrevious: "Delete Previous Word",
    deleteWordNext: "Delete Next Word",
    deleteLineStart: "Delete Line Start",
    deleteLineEnd: "Delete Line End",
    tab: "Insert Tab",
    enter: "Insert Line Delimiter",
    enterNoCursor: "Insert Line Delimiter",
    selectAll: "Select All",
    copy: "Copy",
    cut: "Cut",
    paste: "Paste",
    uppercase: "To Upper Case",
    lowercase: "To Lower Case",
    capitalize: "Capitalize",
    reversecase: "Reverse Case",
    toggleWrapMode: "Toggle Wrap Mode",
    toggleTabMode: "Toggle Tab Mode",
    toggleOverwriteMode: "Toggle Overwrite Mode",
    emacs: "Emacs",
    exchangeMarkPoint: "Exchange Mark and Point",
    setMarkCommand: "Set Mark",
    clearMark: "Clear Mark",
    digitArgument: "Digit Argument ${0}",
    negativeArgument: "Negative Argument",
    Comment: "Comment",
    "Flat outline": "Flat outline",
    incrementalFindStr: "Incremental find: ${0}",
    incrementalFindStrNotFound: "Incremental find: ${0} (not found)",
    incrementalFindReverseStr: "Reverse Incremental find: ${0}",
    incrementalFindReverseStrNotFound: "Reverse Incremental find: ${0} (not found)",
    find: "Find...",
    undo: "Undo",
    redo: "Redo",
    cancelMode: "Cancel Current Mode",
    findNext: "Find Next Occurrence",
    findPrevious: "Find Previous Occurrence",
    incrementalFind: "Incremental Find",
    incrementalFindReverse: "Incremental Find Reverse",
    indentLines: "Indent Lines",
    unindentLines: "Unindent Lines",
    moveLinesUp: "Move Lines Up",
    moveLinesDown: "Move Lines Down",
    copyLinesUp: "Copy Lines Up",
    copyLinesDown: "Copy Lines Down",
    deleteLines: "Delete Lines",
    gotoLine: "Goto Line...",
    gotoLinePrompty: "Goto Line:",
    nextAnnotation: "Next Annotation",
    prevAnnotation: "Previous Annotation",
    expand: "Expand",
    collapse: "Collapse",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    lastEdit: "Last Edit Location",
    toggleLineComment: "Toggle Line Comment",
    addBlockComment: "Add Block Comment",
    removeBlockComment: "Remove Block Comment",
    linkedModeEntered: "Linked Mode entered",
    linkedModeExited: "Linked Mode exited",
    syntaxError: "Syntax Error",
    contentAssist: "Content Assist",
    lineColumn: "Line ${0} : Col ${1}",
    vi: "vi",
    vimove: "(Move)",
    viyank: "(Yank)",
    videlete: "(Delete)",
    vichange: "(Change)",
    viLeft: "${0} Left",
    viRight: "${0} Right",
    viUp: "${0} Up",
    viDown: "${0} Down",
    viw: "${0} Next Word",
    vib: "${0} Beginning of Word",
    viW: "${0} Next Word (ws stop)",
    viB: "${0} Beginning of Word (ws stop)",
    vie: "${0} End of Word",
    viE: "${0} End of Word (ws stop)",
    vi$: "${0} End of the line",
    "vi^_": "${0} First non-blank Char Current Line",
    "vi+": "${0} First Char Next Line",
    "vi-": "${0} First Char Previous Line",
    "vi|": "${0} nth Column in Line",
    viH: "${0} Top of Page",
    viM: "${0} Middle of Page",
    viL: "${0} Bottom of Page",
    "vi/": "${0} Search Forward",
    "vi?": "${0} Search Backward",
    vin: "${0} Next Search",
    viN: "${0} Previous Search",
    vif: "${0} Search Char Fwd",
    viF: "${0} Search Char Bckwd",
    vit: "${0} Search Before Char Fwd",
    viT: "${0} Search Before Char Bckwd",
    "vi,": "${0} Repeat Reverse Char Search",
    "vi;": "${0} Repeat Char Search",
    viG: "${0} Go to Line",
    viycd: "${0} Current Line",
    via: "Append After Cursor",
    viA: "Append to End of Line",
    vii: "Insert Before Cursor",
    viI: "Insert at Beginning of Line",
    viO: "Insert Line Above",
    vio: "Insert Line Below",
    viR: "Begin Overwriting Text",
    vis: "Substitute a Character",
    viS: "Substitute Entire Line",
    viC: "Change Text Until Line End",
    vip: "Paste After Char or Line",
    viP: "Paste Before Char or Line",
    replaceAll: "Replacing all...",
    replacedMatches: "Replaced ${0} matches",
    nothingReplaced: "Nothing replaced",
    notFound: "Not found"
});
define("orion/editor/nls/messages", ["orion/editor/i18n!orion/editor/nls/messages", "orion/editor/nls/root/messages"],
    function (l, p) {
        var o = {
            root: p
        },
            e;
        for (e in l) l.hasOwnProperty(e) && typeof o[e] === "undefined" && (o[e] = l[e]);
        return o
    });
define("orion/editor/eventTarget", [],
    function () {
        function l() { }
        l.addMixin = function (p) {
            var o = l.prototype,
                e;
            for (e in o) o.hasOwnProperty(e) && (p[e] = o[e])
        };
        l.prototype = {
            addEventListener: function (l, o, e) {
                if (!this._eventTypes) this._eventTypes = {};
                var b = this._eventTypes[l];
                b || (b = this._eventTypes[l] = {
                    level: 0,
                    listeners: []
                });
                b.listeners.push({
                    listener: o,
                    useCapture: e
                })
            },
            dispatchEvent: function (l) {
                var o = l.type;
                this._dispatchEvent("pre" + o, l);
                this._dispatchEvent(o, l);
                this._dispatchEvent("post" + o, l)
            },
            _dispatchEvent: function (l, o) {
                var e = this._eventTypes ? this._eventTypes[l] : null;
                if (e) {
                    var b = e.listeners;
                    try {
                        if (e.level++, b)
                            for (var d = 0,
                                h = b.length; d < h; d++)
                                if (b[d]) {
                                    var k = b[d].listener;
                                    typeof k === "function" ? k.call(this, o) : k.handleEvent && typeof k.handleEvent === "function" && k.handleEvent(o)
                                }
                    } finally {
                        if (e.level--, e.compact && e.level === 0) {
                            for (d = b.length - 1; d >= 0; d--) b[d] || b.splice(d, 1);
                            b.length === 0 && delete this._eventTypes[l];
                            e.compact = !1
                        }
                    }
                }
            },
            isListening: function (l) {
                return !this._eventTypes ? !1 : this._eventTypes[l] !== void 0
            },
            removeEventListener: function (l, o, e) {
                if (this._eventTypes) {
                    var b = this._eventTypes[l];
                    if (b) {
                        for (var d = b.listeners,
                            h = 0,
                            k = d.length; h < k; h++) {
                            var f = d[h];
                            if (f && f.listener === o && f.useCapture === e) {
                                b.level !== 0 ? (d[h] = null, b.compact = !0) : d.splice(h, 1);
                                break
                            }
                        }
                        d.length === 0 && delete this._eventTypes[l]
                    }
                }
            }
        };
        return {
            EventTarget: l
        }
    });
define("orion/util", [],
    function () {
        var l = navigator.userAgent,
            p = parseFloat(l.split("MSIE")[1]) || void 0,
            o = parseFloat(l.split("Firefox/")[1] || l.split("Minefield/")[1]) || void 0,
            e = l.indexOf("Opera") !== -1,
            b = parseFloat(l.split("Chrome/")[1]) || void 0,
            d = l.indexOf("Safari") !== -1 && !b,
            h = parseFloat(l.split("WebKit/")[1]) || void 0,
            k = l.indexOf("Android") !== -1,
            f = l.indexOf("iPad") !== -1,
            l = l.indexOf("iPhone") !== -1,
            a = f || l,
            c = navigator.platform.indexOf("Mac") !== -1,
            i = navigator.platform.indexOf("Win") !== -1,
            m = navigator.platform.indexOf("Linux") !== -1;
        return {
            formatMessage: function (a) {
                var c = arguments;
                return a.replace(/\$\{([^\}]+)\}/g,
                    function (a, d) {
                        return c[(d << 0) + 1]
                    })
            },
            createElement: function (a, c) {
                return a.createElementNS ? a.createElementNS("http://www.w3.org/1999/xhtml", c) : a.createElement(c)
            },
            isIE: p,
            isFirefox: o,
            isOpera: e,
            isChrome: b,
            isSafari: d,
            isWebkit: h,
            isAndroid: k,
            isIPad: f,
            isIPhone: l,
            isIOS: a,
            isMac: c,
            isWindows: i,
            isLinux: m,
            platformDelimiter: i ? "\r\n" : "\n"
        }
    });
define("orion/editor/textModel", ["orion/editor/eventTarget", "orion/util"],
    function (l, p) {
        function o(e, b) {
            this._lastLineIndex = -1;
            this._text = [""];
            this._lineOffsets = [0];
            this.setText(e);
            this.setLineDelimiter(b)
        }
        o.prototype = {
            find: function (e) {
                if (this._text.length > 1) this._text = [this._text.join("")];
                var b = e.string,
                    d = b,
                    h = e.caseInsensitive;
                !e.regex && b && (d = b.replace(/([\\$\^*\/+?\.\(\)|{}\[\]])/g, "\\$&"), h && (d = d.replace(/[iI\u0130\u0131]/g, "[Ii\u0130\u0131]")));
                var k = null,
                    f;
                if (d) {
                    var b = e.reverse,
                        a = e.wrap,
                        c = e.wholeWord,
                        i = e.start || 0,
                        e = e.end,
                        m = e !== null && e !== void 0,
                        n = "";
                    n.indexOf("g") === -1 && (n += "g");
                    h && n.indexOf("i") === -1 && (n += "i");
                    c && (d = "\\b" + d + "\\b");
                    var j = this._text[0],
                        q,
                        r,
                        l = 0;
                    m && (h = i < e ? i : e, j = j.substring(h, i < e ? e : i), l = h);
                    var o = RegExp(d, n);
                    if (b) f = function () {
                        var g = null;
                        for (o.lastIndex = 0; ;) {
                            r = o.lastIndex;
                            q = o.exec(j);
                            if (r === o.lastIndex) return null;
                            if (q) {
                                if (!(q.index + l < i)) {
                                    if (!a || g) break;
                                    i = j.length + l
                                }
                                g = {
                                    start: q.index + l,
                                    end: o.lastIndex + l
                                }
                            } else break
                        }
                        if (g) i = g.start;
                        return g
                    };
                    else {
                        if (!m) o.lastIndex = i;
                        f = function () {
                            for (; ;) {
                                r = o.lastIndex;
                                q = o.exec(j);
                                if (r === o.lastIndex) break;
                                if (q) return {
                                    start: q.index + l,
                                    end: o.lastIndex + l
                                };
                                if (!(r !== 0 && a)) break
                            }
                            return null
                        }
                    }
                    k = f()
                }
                return {
                    next: function () {
                        var g = k;
                        g && (k = f());
                        return g
                    },
                    hasNext: function () {
                        return k !== null
                    }
                }
            },
            getCharCount: function () {
                for (var e = 0,
                    b = 0; b < this._text.length; b++) e += this._text[b].length;
                return e
            },
            getLine: function (e, b) {
                var d = this.getLineCount();
                if (!(0 <= e && e < d)) return null;
                var h = this._lineOffsets[e];
                if (e + 1 < d) {
                    d = this.getText(h, this._lineOffsets[e + 1]);
                    if (b) return d;
                    for (var h = d.length,
                        k;
                        (k = d.charCodeAt(h - 1)) === 10 || k === 13;) h--;
                    return d.substring(0, h)
                } else return this.getText(h)
            },
            getLineAtOffset: function (e) {
                var b = this.getCharCount();
                if (!(0 <= e && e <= b)) return -1;
                var d = this.getLineCount();
                if (e === b) return d - 1;
                var h, k, f = this._lastLineIndex;
                if (0 <= f && f < d && (h = this._lineOffsets[f], k = f + 1 < d ? this._lineOffsets[f + 1] : b, h <= e && e < k)) return f;
                for (var a = d,
                    c = -1; a - c > 1;)
                    if (f = Math.floor((a + c) / 2), h = this._lineOffsets[f], k = f + 1 < d ? this._lineOffsets[f + 1] : b, e <= h) a = f;
                    else if (e < k) {
                        a = f;
                        break
                    } else c = f;
                return this._lastLineIndex = a
            },
            getLineCount: function () {
                return this._lineOffsets.length
            },
            getLineDelimiter: function () {
                return this._lineDelimiter
            },
            getLineEnd: function (e, b) {
                var d = this.getLineCount();
                if (!(0 <= e && e < d)) return -1;
                if (e + 1 < d) {
                    d = this._lineOffsets[e + 1];
                    if (b) return d;
                    for (var h = this.getText(Math.max(this._lineOffsets[e], d - 2), d), k = h.length, f;
                        (f = h.charCodeAt(k - 1)) === 10 || f === 13;) k--;
                    return d - (h.length - k)
                } else return this.getCharCount()
            },
            getLineStart: function (e) {
                return !(0 <= e && e < this.getLineCount()) ? -1 : this._lineOffsets[e]
            },
            getText: function (e, b) {
                e === void 0 && (e = 0);
                b === void 0 && (b = this.getCharCount());
                if (e === b) return "";
                for (var d = 0,
                    h = 0,
                    k; h < this._text.length;) {
                    k = this._text[h].length;
                    if (e <= d + k) break;
                    d += k;
                    h++
                }
                for (var f = d,
                    a = h; h < this._text.length;) {
                    k = this._text[h].length;
                    if (b <= d + k) break;
                    d += k;
                    h++
                }
                if (a === h) return this._text[a].substring(e - f, b - d);
                f = this._text[a].substring(e - f);
                d = this._text[h].substring(0, b - d);
                return f + this._text.slice(a + 1, h).join("") + d
            },
            onChanging: function (e) {
                return this.dispatchEvent(e)
            },
            onChanged: function (e) {
                return this.dispatchEvent(e)
            },
            setLineDelimiter: function (e, b) {
                e === "auto" && (e = void 0, this.getLineCount() > 1 && (e = this.getText(this.getLineEnd(0), this.getLineEnd(0, !0))));
                this._lineDelimiter = e ? e : p.platformDelimiter;
                if (b) {
                    var d = this.getLineCount();
                    if (d > 1) {
                        for (var h = Array(d), k = 0; k < d; k++) h[k] = this.getLine(k);
                        this.setText(h.join(this._lineDelimiter))
                    }
                }
            },
            setText: function (e, b, d) {
                e === void 0 && (e = "");
                b === void 0 && (b = 0);
                d === void 0 && (d = this.getCharCount());
                if (!(b === d && e === "")) {
                    for (var h = this.getLineAtOffset(b), k = this.getLineAtOffset(d), f = b, a = d - b, c = k - h, i = e.length, m = 0, n = this.getLineCount(), j = 0, q = 0, r = 0, l = []; ;) {
                        j !== -1 && j <= r && (j = e.indexOf("\r", r));
                        q !== -1 && q <= r && (q = e.indexOf("\n", r));
                        if (q === -1 && j === -1) break;
                        r = j !== -1 && q !== -1 ? j + 1 === q ? q + 1 : (j < q ? j : q) + 1 : j !== -1 ? j + 1 : q + 1;
                        l.push(b + r);
                        m++
                    }
                    this.onChanging({
                        type: "Changing",
                        text: e,
                        start: f,
                        removedCharCount: a,
                        addedCharCount: i,
                        removedLineCount: c,
                        addedLineCount: m
                    });
                    l.length === 0 && (r = this.getLineStart(h), k = k + 1 < n ? this.getLineStart(k + 1) : this.getCharCount(), b !== r && (e = this.getText(r, b) + e, b = r), d !== k && (e += this.getText(d, k), d = k));
                    r = i - a;
                    for (k = h + c + 1; k < n; k++) this._lineOffsets[k] += r;
                    if (l.length < 5E4) h = [h + 1, c].concat(l),
                        Array.prototype.splice.apply(this._lineOffsets, h);
                    else {
                        r = h + 1;
                        this._lineOffsets.splice(r, c);
                        for (n = 0; n < l.length; n += 5E4) h = [r, 0].concat(l.slice(n, Math.min(l.length, n + 5E4))),
                            Array.prototype.splice.apply(this._lineOffsets, h),
                            r += 5E4
                    }
                    for (r = n = 0; r < this._text.length;) {
                        k = this._text[r].length;
                        if (b <= n + k) break;
                        n += k;
                        r++
                    }
                    h = n;
                    for (l = r; r < this._text.length;) {
                        k = this._text[r].length;
                        if (d <= n + k) break;
                        n += k;
                        r++
                    }
                    k = this._text[r];
                    b = this._text[l].substring(0, b - h);
                    d = k.substring(d - n);
                    l = [l, r - l + 1];
                    b && l.push(b);
                    e && l.push(e);
                    d && l.push(d);
                    Array.prototype.splice.apply(this._text, l);
                    if (this._text.length === 0) this._text = [""];
                    this.onChanged({
                        type: "Changed",
                        start: f,
                        removedCharCount: a,
                        addedCharCount: i,
                        removedLineCount: c,
                        addedLineCount: m
                    })
                }
            }
        };
        l.EventTarget.addMixin(o.prototype);
        return {
            TextModel: o
        }
    });
define("orion/keyBinding", ["orion/util"],
    function (l) {
        function p(e, b, d, h, k, f) {
            this.type = f || "keydown";
            this.keyCode = typeof e === "string" && this.type === "keydown" ? e.toUpperCase().charCodeAt(0) : e;
            this.mod1 = b !== void 0 && b !== null ? b : !1;
            this.mod2 = d !== void 0 && d !== null ? d : !1;
            this.mod3 = h !== void 0 && h !== null ? h : !1;
            this.mod4 = k !== void 0 && k !== null ? k : !1
        }

        function o(e) {
            this.keys = e
        }
        p.prototype = {
            getKeys: function () {
                return [this]
            },
            match: function (e, b) {
                if (b !== void 0) {
                    if (b !== 0) return !1
                } else if (e instanceof Array) {
                    if (e.length > 1) return !1;
                    e = e[0]
                }
                return e.type !== this.type ? !1 : this.keyCode === e.keyCode || this.keyCode === String.fromCharCode(l.isOpera ? e.which : e.charCode !== void 0 ? e.charCode : e.keyCode) ? this.mod1 !== (l.isMac ? e.metaKey : e.ctrlKey) ? !1 : this.type === "keydown" && this.mod2 !== e.shiftKey ? !1 : this.mod3 !== e.altKey ? !1 : l.isMac && this.mod4 !== e.ctrlKey ? !1 : !0 : !1
            },
            equals: function (e) {
                return !e ? !1 : this.keyCode !== e.keyCode ? !1 : this.mod1 !== e.mod1 ? !1 : this.mod2 !== e.mod2 ? !1 : this.mod3 !== e.mod3 ? !1 : this.mod4 !== e.mod4 ? !1 : this.type !== e.type ? !1 : !0
            }
        };
        o.prototype = {
            getKeys: function () {
                return this.keys.slice(0)
            },
            match: function (e, b) {
                var d = this.keys;
                if (b !== void 0) return b > d.length ? !1 : d[b].match(e) ? b === d.length - 1 ? !0 : b + 1 : !1;
                else {
                    e instanceof Array || (e = [e]);
                    if (e.length > d.length) return !1;
                    var h;
                    for (h = 0; h < e.length; h++)
                        if (!d[h].match(e[h])) return !1;
                    return h === d.length ? !0 : h
                }
            },
            equals: function (e) {
                if (!e.keys) return !1;
                if (e.keys.length !== this.keys.length) return !1;
                for (var b = 0; b < e.keys.length; b++)
                    if (!e.keys[b].equals(this.keys[b])) return !1;
                return !0
            }
        };
        return {
            KeyBinding: p,
            KeyStroke: p,
            KeySequence: o
        }
    });
define("orion/editor/keyModes", ["orion/keyBinding", "orion/util"],
    function (l, p) {
        function o(b) {
            if (b) this._view = b,
                this._keyBindings = this.createKeyBindings(),
                this._keyBindingIndex = 0
        }

        function e(b) {
            o.call(this, b)
        }
        o.prototype = {
            createKeyBindings: function () {
                return []
            },
            getKeyBindings: function (b) {
                for (var d = [], h = this._keyBindings, e = 0; e < h.length; e++) h[e].actionID === b && d.push(h[e].keyBinding);
                return d
            },
            getView: function () {
                return this._view
            },
            isActive: function () {
                return this._view.getKeyModes().indexOf(this) !== -1
            },
            match: function (b) {
                switch (b.keyCode) {
                    case 16:
                    case 17:
                    case 18:
                    case 91:
                        return
                }
                for (var d = this._keyBindingIndex,
                    h = this._matchingKeyBindings || this._keyBindings,
                    e = [], f = 0; f < h.length; f++) {
                    var a = h[f],
                        c = a.keyBinding.match(b, d);
                    if (c === !0) return this._keyBindingIndex = 0,
                        this._matchingKeyBindings = null,
                        a.actionID;
                    else typeof c === "number" && e.push(a)
                }
                if (e.length === 0) this._keyBindingIndex = 0,
                    this._matchingKeyBindings = null;
                else return this._keyBindingIndex++,
                    this._matchingKeyBindings = e,
                    "noop"
            },
            setKeyBinding: function (b, d) {
                for (var h = this._keyBindings,
                    e = 0; e < h.length; e++) {
                    var f = h[e];
                    if (f.keyBinding.equals(b)) {
                        d ? f.actionID = d : f.predefined ? f.actionID = "noop" : h.splice(e, 1);
                        return
                    }
                }
                d && h.push({
                    keyBinding: b,
                    actionID: d
                })
            },
            setView: function (b) {
                this._view = b
            }
        };
        e.prototype = new o;
        e.prototype.createKeyBindings = function () {
            var b = l.KeyBinding,
                d = [];
            d.push({
                actionID: "lineUp",
                keyBinding: new b(38),
                predefined: !0
            });
            d.push({
                actionID: "lineDown",
                keyBinding: new b(40),
                predefined: !0
            });
            d.push({
                actionID: "charPrevious",
                keyBinding: new b(37),
                predefined: !0
            });
            d.push({
                actionID: "charNext",
                keyBinding: new b(39),
                predefined: !0
            });
            p.isMac ? (d.push({
                actionID: "scrollPageUp",
                keyBinding: new b(33),
                predefined: !0
            }), d.push({
                actionID: "scrollPageDown",
                keyBinding: new b(34),
                predefined: !0
            }), d.push({
                actionID: "pageUp",
                keyBinding: new b(33, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "pageDown",
                keyBinding: new b(34, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "lineStart",
                keyBinding: new b(37, !0),
                predefined: !0
            }), d.push({
                actionID: "lineEnd",
                keyBinding: new b(39, !0),
                predefined: !0
            }), d.push({
                actionID: "wordPrevious",
                keyBinding: new b(37, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "wordNext",
                keyBinding: new b(39, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "scrollTextStart",
                keyBinding: new b(36),
                predefined: !0
            }), d.push({
                actionID: "scrollTextEnd",
                keyBinding: new b(35),
                predefined: !0
            }), d.push({
                actionID: "textStart",
                keyBinding: new b(38, !0),
                predefined: !0
            }), d.push({
                actionID: "textEnd",
                keyBinding: new b(40, !0),
                predefined: !0
            }), d.push({
                actionID: "scrollPageUp",
                keyBinding: new b(38, null, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "scrollPageDown",
                keyBinding: new b(40, null, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "lineStart",
                keyBinding: new b(37, null, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "lineEnd",
                keyBinding: new b(39, null, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "lineStart",
                keyBinding: new b(38, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "lineEnd",
                keyBinding: new b(40, null, null, !0),
                predefined: !0
            })) : (d.push({
                actionID: "pageUp",
                keyBinding: new b(33),
                predefined: !0
            }), d.push({
                actionID: "pageDown",
                keyBinding: new b(34),
                predefined: !0
            }), d.push({
                actionID: "lineStart",
                keyBinding: new b(36),
                predefined: !0
            }), d.push({
                actionID: "lineEnd",
                keyBinding: new b(35),
                predefined: !0
            }), d.push({
                actionID: "wordPrevious",
                keyBinding: new b(37, !0),
                predefined: !0
            }), d.push({
                actionID: "wordNext",
                keyBinding: new b(39, !0),
                predefined: !0
            }), d.push({
                actionID: "textStart",
                keyBinding: new b(36, !0),
                predefined: !0
            }), d.push({
                actionID: "textEnd",
                keyBinding: new b(35, !0),
                predefined: !0
            }));
            p.isFirefox && p.isLinux && (d.push({
                actionID: "lineUp",
                keyBinding: new b(38, !0),
                predefined: !0

            }), d.push({
                actionID: "lineDown",
                keyBinding: new b(40, !0),
                predefined: !0
            }));
            p.isWindows && (d.push({
                actionID: "scrollLineUp",
                keyBinding: new b(38, !0),
                predefined: !0
            }), d.push({
                actionID: "scrollLineDown",
                keyBinding: new b(40, !0),
                predefined: !0
            }));
            d.push({
                actionID: "selectLineUp",
                keyBinding: new b(38, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectLineDown",
                keyBinding: new b(40, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectCharPrevious",
                keyBinding: new b(37, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectCharNext",
                keyBinding: new b(39, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectPageUp",
                keyBinding: new b(33, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectPageDown",
                keyBinding: new b(34, null, !0),
                predefined: !0
            });
            p.isMac ? (d.push({
                actionID: "selectLineStart",
                keyBinding: new b(37, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineEnd",
                keyBinding: new b(39, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectWordPrevious",
                keyBinding: new b(37, null, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectWordNext",
                keyBinding: new b(39, null, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextStart",
                keyBinding: new b(36, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextEnd",
                keyBinding: new b(35, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextStart",
                keyBinding: new b(38, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextEnd",
                keyBinding: new b(40, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineStart",
                keyBinding: new b(37, null, !0, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineEnd",
                keyBinding: new b(39, null, !0, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineStart",
                keyBinding: new b(38, null, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineEnd",
                keyBinding: new b(40, null, !0, !0),
                predefined: !0
            })) : (p.isLinux && (d.push({
                actionID: "selectWholeLineUp",
                keyBinding: new b(38, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectWholeLineDown",
                keyBinding: new b(40, !0, !0),
                predefined: !0
            })), d.push({
                actionID: "selectLineStart",
                keyBinding: new b(36, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectLineEnd",
                keyBinding: new b(35, null, !0),
                predefined: !0
            }), d.push({
                actionID: "selectWordPrevious",
                keyBinding: new b(37, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectWordNext",
                keyBinding: new b(39, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextStart",
                keyBinding: new b(36, !0, !0),
                predefined: !0
            }), d.push({
                actionID: "selectTextEnd",
                keyBinding: new b(35, !0, !0),
                predefined: !0
            }));
            d.push({
                actionID: "undo",
                keyBinding: new l.KeyBinding("z", !0),
                predefined: !0
            });
            p.isMac ? d.push({
                actionID: "redo",
                keyBinding: new l.KeyBinding("z", !0, !0),
                predefined: !0
            }) : d.push({
                actionID: "redo",
                keyBinding: new l.KeyBinding("y", !0),
                predefined: !0
            });
            d.push({
                actionID: "deletePrevious",
                keyBinding: new b(8),
                predefined: !0
            });
            d.push({
                actionID: "deletePrevious",
                keyBinding: new b(8, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "deleteNext",
                keyBinding: new b(46),
                predefined: !0
            });
            d.push({
                actionID: "deleteWordPrevious",
                keyBinding: new b(8, !0),
                predefined: !0
            });
            d.push({
                actionID: "deleteWordPrevious",
                keyBinding: new b(8, !0, !0),
                predefined: !0
            });
            d.push({
                actionID: "deleteWordNext",
                keyBinding: new b(46, !0),
                predefined: !0
            });
            d.push({
                actionID: "tab",
                keyBinding: new b(9),
                predefined: !0
            });
            d.push({
                actionID: "shiftTab",
                keyBinding: new b(9, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "enter",
                keyBinding: new b(13),
                predefined: !0
            });
            d.push({
                actionID: "enter",
                keyBinding: new b(13, null, !0),
                predefined: !0
            });
            d.push({
                actionID: "selectAll",
                keyBinding: new b("a", !0),
                predefined: !0
            });
            d.push({
                actionID: "toggleTabMode",
                keyBinding: new b("m", !0),
                predefined: !0
            });
            p.isMac && (d.push({
                actionID: "deleteNext",
                keyBinding: new b(46, null, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteWordPrevious",
                keyBinding: new b(8, null, null, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteWordNext",
                keyBinding: new b(46, null, null, !0),
                predefined: !0
            }));
            d.push({
                actionID: "toggleWrapMode",
                keyBinding: new l.KeyBinding("w", !0, !1, !0)
            });
            d.push({
                actionID: "toggleOverwriteMode",
                keyBinding: new l.KeyBinding(45)
            });
            if (!p.isFirefox) {
                var h = p.isMac && p.isChrome;
                d.push({
                    actionID: "noop",
                    keyBinding: new b("u", !h, !1, !1, h),
                    predefined: !0
                });
                d.push({
                    actionID: "noop",
                    keyBinding: new b("i", !h, !1, !1, h),
                    predefined: !0
                });
                d.push({
                    actionID: "noop",
                    keyBinding: new b("b", !h, !1, !1, h),
                    predefined: !0
                })
            }
            p.isFirefox && (d.push({
                actionID: "copy",
                keyBinding: new b(45, !0),
                predefined: !0
            }), d.push({
                actionID: "paste",
                keyBinding: new b(45, null, !0),
                predefined: !0
            }), d.push({
                actionID: "cut",
                keyBinding: new b(46, null, !0),
                predefined: !0
            }));
            p.isMac && (d.push({
                actionID: "lineStart",
                keyBinding: new b("a", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "lineEnd",
                keyBinding: new b("e", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "lineUp",
                keyBinding: new b("p", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "lineDown",
                keyBinding: new b("n", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "charPrevious",
                keyBinding: new b("b", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "charNext",
                keyBinding: new b("f", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "deletePrevious",
                keyBinding: new b("h", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteNext",
                keyBinding: new b("d", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteLineEnd",
                keyBinding: new b("k", !1, !1, !1, !0),
                predefined: !0
            }), p.isFirefox ? (d.push({
                actionID: "scrollPageDown",
                keyBinding: new b("v", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteLineStart",
                keyBinding: new b("u", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "deleteWordPrevious",
                keyBinding: new b("w", !1, !1, !1, !0),
                predefined: !0
            })) : (d.push({
                actionID: "pageDown",
                keyBinding: new b("v", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "centerLine",
                keyBinding: new b("l", !1, !1, !1, !0),
                predefined: !0
            }), d.push({
                actionID: "enterNoCursor",
                keyBinding: new b("o", !1, !1, !1, !0),
                predefined: !0
            })));
            return d
        };
        return {
            KeyMode: o,
            DefaultKeyMode: e
        }
    });
define("orion/editor/textTheme", ["require", "orion/editor/eventTarget", "orion/util"],
    function (l, p, o) {
        function e(d) {
            d = d || {};
            this._document = d.document || document
        }
        var b = {};
        e.getTheme = function (d) {
            var d = d || "default",
                h = b[d];
            h || (h = b[d] = new e);
            return h
        };
        e.prototype = {
            getThemeClass: function () {
                return this._themeClass
            },
            setThemeClass: function (d, b) {
                var e = this,
                    f = e._themeClass;
                e._themeClass = d;
                this._load(d, b,
                    function () {
                        e.onThemeChanged({
                            type: "ThemeChanged",
                            oldValue: f,
                            newValue: e.getThemeClass()
                        })
                    })
            },
            onThemeChanged: function (d) {
                return this.dispatchEvent(d)
            },
            buildStyleSheet: function (d, b) {
                function e(a, c, b) {
                    c && (f.push("." + d + " ." + a + " {"), f.push("\t" + (b ? "background-color" : "color") + ": " + c + ";"), f.push("}"))
                }
                var f = [];
                f.push("");
                f.push("." + d + " {");
                b.fontFamily && f.push("\tfont-family: " + b.fontFamily + ";");
                b.fontSize && f.push("\tfont-size: " + b.fontSize + ";");
                b.fontSize && f.push("\tcolor: " + b.text + ";");
                f.push("}");
                f.push("." + d + ".textview {");
                b.background && f.push("\tbackground-color: " + b.background + ";");
                f.push("}");
                e("ruler.annotations", b.annotationRuler, !0);
                e("ruler.lines", b.annotationRuler, !0);
                e("ruler.folding", b.annotationRuler, !0);
                e("ruler.overview", b.overviewRuler, !0);
                e("rulerLines", b.lineNumber, !1);
                e("rulerLines.even", b.lineNumberEven, !1);
                e("rulerLines.odd", b.lineNumberOdd, !1);
                e("annotationLine.currentLine", b.currentLine, !0);
                e("entity-name-tag", b.keyword, !1);
                e("entity-other-attribute-name", b.attribute, !1);
                e("string-quoted", b.string, !1);
                e("line_caret", b.currentLine, !0);
                e("token_keyword", b.keyword, !1);
                e("token_string", b.string, !1);
                e("token_singleline_comment", b.comment, !1);
                e("token_multiline_comment", b.comment, !1);
                e("token_doc_comment", b.comment, !1);
                e("token_doc_html_markup", b.comment, !1);
                return f.join("\n")
            },
            _createStyle: function (d, b, e, f) {
                var a = this._document,
                    d = "orion-theme-" + d,
                    c = a.getElementById(d);
                if (c) {
                    if (f || c.firstChild.data === b) return;
                    c.removeChild(c.firstChild);
                    c.appendChild(a.createTextNode(b))
                } else f ? (c = o.createElement(a, "link"), c.rel = "stylesheet", c.type = "text/css", c.href = b, c.addEventListener("load",
                    function () {
                        e()
                    })) : (c = o.createElement(a, "style"), c.appendChild(a.createTextNode(b))),
                    c.id = d,
                    (a.getElementsByTagName("head")[0] || a.documentElement).appendChild(c);
                f || e()
            },
            _load: function (d, b, e) {
                if (d)
                    if (typeof b === "string") this._createStyle(d, b, e);
                    else if (b = b.href, b.substring(b.length - 4) !== ".css" && (b += ".css"), /^\//.test(b) || /[a-zA-Z0-9]+:\/\//i.test(b) || !l.toUrl) this._createStyle(d, b, e, !0);
                    else {
                        var f = this;
                        l(["text!" + b],
                            function (a) {
                                f._createStyle(d, a, e, !1)
                            })
                    } else e()
            }
        };
        p.EventTarget.addMixin(e.prototype);
        return {
            TextTheme: e
        }
    });
define("orion/editor/textView", "i18n!orion/editor/nls/messages,orion/editor/textModel,orion/editor/keyModes,orion/editor/eventTarget,orion/editor/textTheme,orion/util".split(","),
    function (l, p, o, e, b, d) {
        function h(g, a, c, s) {
            typeof g.addEventListener === "function" ? g.addEventListener(a, c, s === !0) : g.attachEvent("on" + a, c)
        }

        function k(g, a, c) {
            if (c) {
                a.className = "";
                for (var c = a.attributes,
                    s = c.length; s-- > 0;)(!d.isIE || d.isIE >= 9 || d.isIE < 9 && c[s].specified) && a.removeAttribute(c[s].name)
            }
            if (g) {
                if (g.styleClass) a.className = g.styleClass;
                if (c = g.style)
                    for (var b in c) c.hasOwnProperty(b) && (a.style[b] = c[b]);
                if (g = g.attributes)
                    for (var i in g) g.hasOwnProperty(i) && a.setAttribute(i, g[i])
            }
        }

        function f(g) {
            return g instanceof Array ? g.slice(0) : g
        }

        function a(g, a) {
            if (!g) return a;
            if (!a) return g;
            for (var c in a) a.hasOwnProperty(c) && (g.hasOwnProperty(c) || (g[c] = a[c]));
            return g
        }

        function c(g, a) {
            if (g === a) return !0;
            if (g && !a || !g && a) return !1;
            if (g && g.constructor === String || a && a.constructor === String) return !1;
            if (g instanceof Array || a instanceof Array) {
                if (!(g instanceof Array && a instanceof Array)) return !1;
                if (g.length !== a.length) return !1;
                for (var d = 0; d < g.length; d++)
                    if (!c(g[d], a[d])) return !1;
                return !0
            }
            if (!(g instanceof Object) || !(a instanceof Object)) return !1;
            for (d in g)
                if (g.hasOwnProperty(d)) {
                    if (!a.hasOwnProperty(d)) return !1;
                    if (!c(g[d], a[d])) return !1
                }
            for (d in a)
                if (!g.hasOwnProperty(d)) return !1;
            return !0
        }

        function i(g, a, c) {
            for (var s = 0,
                d = 0,
                b = 0,
                i = g.length; b < i;) {
                s !== -1 && s <= b && (s = g.indexOf("\r", b));
                d !== -1 && d <= b && (d = g.indexOf("\n", b));
                var f = b,
                    m;
                if (d === -1 && s === -1) {
                    a(g.substring(b));
                    break
                }
                s !== -1 && d !== -1 ? s + 1 === d ? (m = s, b = d + 1) : (m = s < d ? s : d, b = (s < d ? s : d) + 1) : s !== -1 ? (m = s, b = s + 1) : (m = d, b = d + 1);
                a(g.substring(f, m));
                c()
            }
        }

        function m(g) {
            var a, c, s, d, b = g.ownerDocument.defaultView || g.ownerDocument.parentWindow;
            if (b.getComputedStyle) g = b.getComputedStyle(g, null),
                a = g.getPropertyValue("padding-left"),
                c = g.getPropertyValue("padding-top"),
                s = g.getPropertyValue("padding-right"),
                d = g.getPropertyValue("padding-bottom");
            else if (g.currentStyle) a = g.currentStyle.paddingLeft,
                c = g.currentStyle.paddingTop,
                s = g.currentStyle.paddingRight,
                d = g.currentStyle.paddingBottom;
            return {
                left: parseInt(a, 10) || 0,
                top: parseInt(c, 10) || 0,
                right: parseInt(s, 10) || 0,
                bottom: parseInt(d, 10) || 0
            }
        }

        function n(g) {
            var a, c, s, d, b = g._trim;
            if (!b) {
                var b = m(g),
                    i = g.ownerDocument.defaultView || g.ownerDocument.parentWindow;
                if (i.getComputedStyle) d = i.getComputedStyle(g, null),
                    a = d.getPropertyValue("border-left-width"),
                    c = d.getPropertyValue("border-top-width"),
                    s = d.getPropertyValue("border-right-width"),
                    d = d.getPropertyValue("border-bottom-width");
                else if (g.currentStyle) a = g.currentStyle.borderLeftWidth,
                    c = g.currentStyle.borderTopWidth,
                    s = g.currentStyle.borderRightWidth,
                    d = g.currentStyle.borderBottomWidth;
                a = parseInt(a, 10) || 0;
                c = parseInt(c, 10) || 0;
                s = parseInt(s, 10) || 0;
                d = parseInt(d, 10) || 0;
                b.left += a;
                b.top += c;
                b.right += s;
                b.bottom += d;
                g._trim = b
            }
            return b
        }

        function j(g, a, c) {
            this.start = g;
            this.end = a;
            this.caret = c
        }

        function q(g) {
            this.left = g.left;
            this.top = g.top;
            this.right = g.right;
            this.bottom = g.bottom
        }

        function r(g, a, c) {
            this.view = g;
            this.lineIndex = a;
            this._lineDiv = c
        }

        function _TextView(g) {
            this._init(g || {})
        }
        var v = function () {
            function g(g) {
                this.options = g
            }
            g.prototype.play = function () {
                var g = typeof this.options.duration === "number" ? this.options.duration : 350,
                    a = this.options.easing || this.defaultEasing,
                    c = this.options.onAnimate ||
                        function () { },
                    d = this.options.curve[0],
                    b = this.options.curve[1],
                    i = b - d,
                    f = -1,
                    m,
                    n = this;
                this.interval = this.options.window.setInterval(function () {
                    f = f === -1 ? (new Date).getTime() : f;
                    var j = ((new Date).getTime() - f) / g;
                    j < 1 ? (j = a(j), m = d + j * i, c(m)) : (c(b), n.stop())
                },
                    typeof this.options.rate === "number" ? this.options.rate : 20)
            };
            g.prototype.stop = function () {
                this.options.window.clearInterval(this.interval);
                (this.options.onEnd ||
                    function () { })()
            };
            g.prototype.defaultEasing = function (g) {
                return Math.sin(g * (Math.PI / 2))
            };
            return g
        }();
        j.prototype = {
            clone: function () {
                return new j(this.start, this.end, this.caret)
            },
            collapse: function () {
                this.caret ? this.end = this.start : this.start = this.end
            },
            extend: function (g) {
                this.caret ? this.start = g : this.end = g;
                if (this.start > this.end) g = this.start,
                    this.start = this.end,
                    this.end = g,
                    this.caret = !this.caret
            },
            setCaret: function (g) {
                this.end = this.start = g;
                this.caret = !1
            },
            getCaret: function () {
                return this.caret ? this.start : this.end
            },
            toString: function () {
                return "start=" + this.start + " end=" + this.end + (this.caret ? " caret is at start" : " caret is at end")
            },
            isEmpty: function () {
                return this.start === this.end
            },
            equals: function (g) {
                return this.caret === g.caret && this.start === g.start && this.end === g.end
            }
        };
        q.prototype = {
            toString: function () {
                return "{l=" + this.left + ", t=" + this.top + ", r=" + this.right + ", b=" + this.bottom + "}"
            }
        };
        r.prototype = {
            create: function (g, a) {
                if (!this._lineDiv) {
                    var c = this._lineDiv = this._createLine(g, a, this.lineIndex);
                    c._line = this;
                    return c
                }
            },
            _createLine: function (g, a, b) {
                var s = this.view,
                    i = s._model,
                    f = i.getLine(b),
                    m = i.getLineStart(b),
                    n = {
                        type: "LineStyle",
                        textView: s,
                        lineIndex: b,
                        lineText: f,
                        lineStart: m
                    };
                if (f.length < 2E3) s.onLineStyle(n);
                i = a || d.createElement(g.ownerDocument, "div");
                if (!a || !c(a.viewStyle, n.style)) {
                    k(n.style, i, a);
                    if (a) a._trim = null;
                    i.viewStyle = n.style;
                    i.setAttribute("role", "presentation")
                }
                i.lineIndex = b;
                b = [];
                this._createRanges(n.ranges, f, 0, f.length, m, {
                    tabOffset: 0,
                    ranges: b
                });
                f = " ";
                !s._fullSelection && d.isIE < 9 && (f = "\ufeff");
                d.isWebkit && (f = "\u200c");
                n = {
                    text: f,
                    style: s._metrics.largestFontStyle,
                    ignoreChars: 1
                };
                b.length === 0 || !b[b.length - 1].style || b[b.length - 1].style.tagName !== "div" ? b.push(n) : b.splice(b.length - 1, 0, n);
                var j, e, h, q, r, f = s = 0,
                    l, o;
                if (a) {
                    if (e = a.modelChangedEvent) e.removedLineCount === 0 && e.addedLineCount === 0 ? (o = e.start - m, l = e.addedCharCount - e.removedCharCount) : o = -1,
                        a.modelChangedEvent = void 0;
                    e = a.firstChild
                }
                for (m = 0; m < b.length; m++) {
                    n = b[m];
                    q = n.text;
                    s += q.length;
                    j = n.style;
                    if (e)
                        if (r = e.firstChild.data, h = e.viewStyle, r === q && c(j, h)) {
                            f += r.length;
                            e._rectsCache = void 0;
                            j = e = e.nextSibling;
                            continue
                        } else
                            for (; e;) {
                                if (o !== -1) {
                                    h = s;
                                    h >= o && (h -= l);
                                    r = (r = e.firstChild.data) ? r.length : 0;
                                    if (f + r > h) break;
                                    f += r
                                }
                                h = e.nextSibling;
                                i.removeChild(e);
                                e = h
                            }
                    j = this._createSpan(i, q, j, n.ignoreChars);
                    e ? i.insertBefore(j, e) : i.appendChild(j);
                    if (a) a.lineWidth = void 0
                }
                if (a)
                    for (g = j ? j.nextSibling : null; g;) h = g.nextSibling,
                        a.removeChild(g),
                        g = h;
                else g.appendChild(i);
                return i
            },
            _createRanges: function (g, a, d, s, b, i) {
                if (!(d > s)) {
                    if (g)
                        for (var f = 0; f < g.length; f++) {
                            var m = g[f];
                            if (!(m.end < b + d)) {
                                var n = Math.max(b + d, m.start) - b;
                                if (n > s) break;
                                var j = Math.min(b + s, m.end) - b;
                                if (n <= j) {
                                    n = Math.max(d, n);
                                    j = Math.min(s, j);
                                    for (d < n && this._createRange(a, d, n, null, i); f + 1 < g.length && g[f + 1].start - b === j && c(m.style, g[f + 1].style);) m = g[f + 1],
                                        j = Math.min(b + s, m.end) - b,
                                        f++;
                                    this._createRange(a, n, j, m.style, i);
                                    d = j
                                }
                            }
                        }
                    d < s && this._createRange(a, d, s, null, i)
                }
            },
            _createRange: function (g, a, c, s, d) {
                if (!(a > c)) {
                    var b = this.view._customTabSize;
                    if (b && b !== 8)
                        for (var i = g.indexOf("\t", a); i !== -1;) {
                            a < i && (a = {
                                text: g.substring(a, i),
                                style: s
                            },
                                d.ranges.push(a), d.tabOffset += a.text.length);
                            a = b - d.tabOffset % b;

                            if (a > 0) {
                                for (var f = "\u00a0",
                                    m = 1; m < a; m++) f += " ";
                                a = {
                                    text: f,
                                    style: s,
                                    ignoreChars: a - 1
                                };
                                d.ranges.push(a);
                                d.tabOffset += a.text.length
                            }
                            a = i + 1;
                            if (a === c) return;
                            i = g.indexOf("\t", a)
                        }
                    a <= c && (a = {
                        text: g.substring(a, c),
                        style: s
                    },
                        d.ranges.push(a), d.tabOffset += a.text.length)
                }
            },
            _createSpan: function (g, a, c, s) {
                var b = this.view,
                    i = "span";
                c && c.tagName && (i = c.tagName.toLowerCase());
                var f = i === "a";
                if (f) g.hasLink = !0;
                f && !b._linksVisible && (i = "span");
                f = g.ownerDocument;
                g = d.createElement(g.ownerDocument, i);
                c && c.html ? (g.innerHTML = c.html, g.ignore = !0) : c && c.node ? (g.appendChild(c.node), g.ignore = !0) : g.appendChild(f.createTextNode(c && c.text ? c.text : a));
                k(c, g);
                if (i === "a") {
                    var m = b._getWindow();
                    h(g, "click",
                        function (g) {
                            return b._handleLinkClick(g ? g : m.event)
                        },
                        !1)
                }
                g.viewStyle = c;
                if (s) g.ignoreChars = s;
                return g
            },
            _ensureCreated: function () {
                return this._lineDiv ? this._lineDiv : this._createdDiv = this.create(this.view._clientDiv, null)
            },
            getBoundingClientRect: function (g, a) {
                var c = this._ensureCreated(),
                    s = this.view;
                if (g === void 0) return this._getLineBoundingClientRect(c, !0);
                var b = s._model,
                    i = c.ownerDocument,
                    f = this.lineIndex,
                    m = null;
                if (g < b.getLineEnd(f)) {
                    b = b.getLineStart(f);
                    for (f = c.firstChild; f;) {
                        if (!f.ignore) {
                            var n = f.firstChild,
                                j = n.length;
                            f.ignoreChars && (j -= f.ignoreChars);
                            if (b + j > g) {
                                m = g - b;
                                if (s._isRangeRects) i = i.createRange(),
                                    i.setStart(n, m),
                                    i.setEnd(n, m + 1),
                                    m = new q(i.getBoundingClientRect());
                                else if (d.isIE) i = i.body.createTextRange(),
                                    i.moveToElementText(f),
                                    i.collapse(),
                                    i.moveEnd("character", m + 1),
                                    i.moveStart("character", m),
                                    m = new q(i.getBoundingClientRect());
                                else {
                                    var e = n.data;
                                    f.removeChild(n);
                                    f.appendChild(i.createTextNode(e.substring(0, m)));
                                    var h = d.createElement(i, "span");
                                    h.appendChild(i.createTextNode(e.substring(m, m + 1)));
                                    f.appendChild(h);
                                    f.appendChild(i.createTextNode(e.substring(m + 1)));
                                    m = new q(h.getBoundingClientRect());
                                    f.innerHTML = "";
                                    f.appendChild(n);
                                    this._createdDiv || (i = s._getSelection(), (b <= i.start && i.start < b + j || b <= i.end && i.end < b + j) && s._updateDOMSelection())
                                }
                                d.isIE && (i = c.ownerDocument.defaultView || c.ownerDocument.parentWindow, c = i.screen.logicalXDPI / i.screen.deviceXDPI, i = i.screen.logicalYDPI / i.screen.deviceYDPI, m.left *= c, m.right *= c, m.top *= i, m.bottom *= i);
                                break
                            }
                            b += j
                        }
                        f = f.nextSibling
                    }
                }
                c = this.getBoundingClientRect();
                if (!m) s._wrapMode ? (s = this.getClientRects(), m = s[s.length - 1], m.left = m.right, m.left += c.left, m.top += c.top, m.right += c.left, m.bottom += c.top) : (m = new q(c), m.left = m.right);
                if (a || a === void 0) m.left -= c.left,
                    m.top -= c.top,
                    m.right -= c.left,
                    m.bottom -= c.top;
                return m
            },
            _getClientRects: function (g, a) {
                var c, s, d, b;
                if (!g._rectsCache) {
                    c = g.getClientRects();
                    s = Array(c.length);
                    for (b = 0; b < c.length; b++) d = s[b] = new q(c[b]),
                        d.left -= a.left,
                        d.top -= a.top,
                        d.right -= a.left,
                        d.bottom -= a.top;
                    g._rectsCache = s
                }
                c = g._rectsCache;
                s = [c.length];
                for (b = 0; b < c.length; b++) s[b] = new q(c[b]);
                return s
            },
            getClientRects: function (g) {
                if (!this.view._wrapMode) return [this.getBoundingClientRect()];
                for (var a = this._ensureCreated(), c = [], s = a.firstChild, d, b = a.getBoundingClientRect(); s;) {
                    if (!s.ignore)
                        for (var i = this._getClientRects(s, b), a = 0; a < i.length; a++) {
                            var f = i[a],
                                m;
                            if (f.top !== f.bottom) {
                                var n = f.top + (f.bottom - f.top) / 2;
                                for (m = 0; m < c.length; m++)
                                    if (d = c[m], d.top <= n && n < d.bottom) break;
                                if (m === c.length) c.push(f);
                                else {
                                    if (f.left < d.left) d.left = f.left;
                                    if (f.top < d.top) d.top = f.top;
                                    if (f.right > d.right) d.right = f.right;
                                    if (f.bottom > d.bottom) d.bottom = f.bottom
                                }
                            }
                        }
                    s = s.nextSibling
                }
                return g !== void 0 ? c[g] : c
            },
            _getLineBoundingClientRect: function (g, a) {
                var c = new q(g.getBoundingClientRect());
                if (!this.view._wrapMode) {
                    c.right = c.left;
                    for (var d = g.lastChild; d && d.ignoreChars === d.firstChild.length;) d = d.previousSibling;
                    if (d) d = d.getBoundingClientRect(),
                        c.right = d.right + n(g).right
                }
                a && (d = n(g), c.left += d.left, c.right -= d.right);
                return c
            },
            getLineCount: function () {
                return !this.view._wrapMode ? 1 : this.getClientRects().length
            },
            getLineIndex: function (g) {
                if (!this.view._wrapMode) return 0;
                for (var a = this.getClientRects(), g = this.getBoundingClientRect(g), g = g.top + (g.bottom - g.top) / 2, c = 0; c < a.length; c++)
                    if (a[c].top <= g && g < a[c].bottom) return c;
                return a.length - 1
            },
            getLineStart: function (g) {
                if (!this.view._wrapMode || g === 0) return this.view._model.getLineStart(g);
                var a = this.getClientRects();
                return this.getOffset(a[g].left + 1, a[g].top + 1)
            },
            getOffset: function (g, a) {
                var c = this.view,
                    s = c._model,
                    b = this.lineIndex,
                    i = s.getLineStart(b),
                    f = s.getLineEnd(b);
                if (i === f) return i;
                var m = this._ensureCreated(),
                    n = this.getBoundingClientRect(),
                    j,
                    e;
                if (c._wrapMode) {
                    j = this.getClientRects();
                    if (a < j[0].top) a = j[0].top;
                    for (var h = 0; h < j.length; h++)
                        if (e = j[h], e.top <= a && a < e.bottom) break;
                    if (g < e.left) g = e.left;
                    g > e.right && (g = e.right - 1)
                } else g < 0 && (g = 0),
                    g > n.right - n.left && (g = n.right - n.left);
                var k = m.ownerDocument,
                    h = k.defaultView || k.parentWindow,
                    q = d.isIE ? h.screen.logicalXDPI / h.screen.deviceXDPI : 1,
                    r = d.isIE ? h.screen.logicalYDPI / h.screen.deviceYDPI : 1,
                    h = i,
                    l = m.firstChild;
                a: for (; l;) {
                    if (!l.ignore) {
                        var o = l.firstChild,
                            m = o.length;
                        l.ignoreChars && (m -= l.ignoreChars);
                        var t, p, v;
                        j = this._getClientRects(l, n);
                        for (var z = 0; z < j.length; z++)
                            if (e = j[z], e.left <= g && g < e.right && (!c._wrapMode || e.top <= a && a < e.bottom)) {
                                if (d.isIE || c._isRangeRects) {
                                    for (var k = c._isRangeRects ? k.createRange() : k.body.createTextRange(), z = m, D = -1; z - D > 1;) {
                                        var E = Math.floor((z + D) / 2);
                                        j = D + 1;
                                        e = E === m - 1 && l.ignoreChars ? o.length : E + 1;
                                        c._isRangeRects ? (k.setStart(o, j), k.setEnd(o, e)) : (k.moveToElementText(l), k.move("character", j), k.moveEnd("character", e - j));
                                        j = k.getClientRects();
                                        for (var J = !1,
                                            G = 0; G < j.length; G++)
                                            if (e = j[G], t = e.left * q - n.left, v = e.right * q - n.left, p = e.top * r - n.top, e = e.bottom * r - n.top, t <= g && g < v && (!c._wrapMode || p <= a && a < e)) {
                                                J = !0;
                                                break
                                            }
                                        J ? z = E : D = E
                                    }
                                    h += z;
                                    j = z;
                                    e = z === m - 1 && l.ignoreChars ? o.length : Math.min(z + 1, o.length);
                                    c._isRangeRects ? (k.setStart(o, j), k.setEnd(o, e)) : (k.moveToElementText(l), k.move("character", j), k.moveEnd("character", e - j));
                                    e = k.getClientRects()[0];
                                    t = e.left * q - n.left;
                                    v = e.right * q - n.left;
                                    c = g > t + (v - t) / 2;
                                    n = h - i;
                                    s = s.getLine(b);
                                    b = s.charCodeAt(n);
                                    55296 <= b && b <= 56319 && c ? n < s.length && (b = s.charCodeAt(n + 1), 56320 <= b && b <= 57343 && (h += 1)) : 56320 <= b && b <= 57343 && !c && n > 0 && (b = s.charCodeAt(n - 1), 55296 <= b && b <= 56319 && (h -= 1));
                                    c && h++
                                } else {
                                    s = [];
                                    for (b = 0; b < m; b++) s.push("<span>"),
                                        b === m - 1 ? s.push(o.data.substring(b)) : s.push(o.data.substring(b, b + 1)),
                                        s.push("</span>");
                                    l.innerHTML = s.join("");
                                    for (s = l.firstChild; s;) {
                                        e = s.getBoundingClientRect();
                                        t = e.left - n.left;
                                        v = e.right - n.left;
                                        if (t <= g && g < v) {
                                            g > t + (v - t) / 2 && h++;
                                            break
                                        }
                                        h++;
                                        s = s.nextSibling
                                    }
                                    if (!this._createdDiv) l.innerHTML = "",
                                        l.appendChild(o),
                                        n = c._getSelection(),
                                        (h <= n.start && n.start < h + m || h <= n.end && n.end < h + m) && c._updateDOMSelection()
                                }
                                break a
                            }
                        h += m
                    }
                    l = l.nextSibling
                }
                return Math.min(f, Math.max(i, h))
            },
            getNextOffset: function (g, a) {
                if (a.unit === "line") {
                    var c = this.view._model,
                        b = c.getLineAtOffset(g);
                    if (a.count > 0) return a.count--,
                        c.getLineEnd(b);
                    a.count++;
                    return c.getLineStart(b)
                }
                return a.unit === "wordend" || a.unit === "wordWS" || a.unit === "wordendWS" ? this._getNextOffset_W3C(g, a) : d.isIE ? this._getNextOffset_IE(g, a) : this._getNextOffset_W3C(g, a)
            },
            _getNextOffset_W3C: function (g, a) {
                function c(g) {
                    return 33 <= g && g <= 47 || 58 <= g && g <= 64 || 91 <= g && g <= 94 || g === 96 || 123 <= g && g <= 126
                }

                function d(g) {
                    return g === 32 || g === 9
                }
                var b = this.view._model,
                    i = b.getLineAtOffset(g),
                    f = b.getLine(i),
                    m = b.getLineStart(i),
                    b = b.getLineEnd(i),
                    i = f.length,
                    n = g - m,
                    j,
                    e = a.count < 0 ? -1 : 1;
                if (a.unit === "word" || a.unit === "wordend" || a.unit === "wordWS" || a.unit === "wordendWS")
                    for (var h, k, q; a.count !== 0;) {
                        if (a.count > 0) {
                            if (n === i) return b;
                            j = f.charCodeAt(n);
                            h = c(j);
                            k = !h && !d(j);
                            for (n++; n < i;) {
                                j = f.charCodeAt(n);
                                if (a.unit !== "wordWS" && a.unit !== "wordendWS") {
                                    q = c(j);
                                    if (a.unit === "wordend") {
                                        if (!q && h) break
                                    } else if (q && !h) break;
                                    j = !q && !d(j)
                                } else j = !d(j);
                                if (a.unit === "wordend" || a.unit === "wordendWS") {
                                    if (!j && k) break
                                } else if (j && !k) break;
                                k = j;
                                h = q;
                                n++
                            }
                        } else {
                            if (n === 0) return m;
                            n--;
                            j = f.charCodeAt(n);
                            h = c(j);
                            for (k = !h && !d(j); 0 < n;) {
                                j = f.charCodeAt(n - 1);
                                if (a.unit !== "wordWS" && a.unit !== "wordendWS") {
                                    q = c(j);
                                    if (a.unit === "wordend") {
                                        if (q && !h) break
                                    } else if (!q && h) break;
                                    j = !q && !d(j)
                                } else j = !d(j);
                                if (a.unit === "wordend" || a.unit === "wordendWS") {
                                    if (j && !k) break
                                } else if (!j && k) break;
                                k = j;
                                h = q;
                                n--
                            }
                        }
                        a.count -= e
                    } else
                    for (; a.count !== 0 && 0 <= n + e && n + e <= i;) n += e,
                        j = f.charCodeAt(n),
                        56320 <= j && j <= 57343 && n > 0 && (j = f.charCodeAt(n - 1), 55296 <= j && j <= 56319 && (n += e)),
                        a.count -= e;
                return m + n
            },
            _getNextOffset_IE: function (g, a) {
                var c = this._ensureCreated(),
                    d = this.view._model,
                    b = this.lineIndex,
                    i = 0,
                    f;
                f = d.getLineStart(b);
                var m = c.ownerDocument,
                    n = a.count < 0 ? -1 : 1;
                if (g === d.getLineEnd(b)) {
                    for (c = c.lastChild; c && c.ignoreChars;) c = c.previousSibling;
                    if (!c) return f;
                    i = m.body.createTextRange();
                    i.moveToElementText(c);
                    f = i.text.length;
                    i.moveEnd(a.unit, n);
                    i = g + i.text.length - f
                } else if (g === f && a.count < 0) i = f;
                else
                    for (c = c.firstChild; c;) {
                        d = c.firstChild.length;
                        c.ignoreChars && (d -= c.ignoreChars);
                        if (f + d > g) {
                            i = m.body.createTextRange();
                            g === f && a.count < 0 ? i.moveToElementText(c.previousSibling) : (i.moveToElementText(c), i.collapse(), i.moveEnd("character", g - f));
                            f = i.text.length;
                            i.moveEnd(a.unit, n);
                            i = g + i.text.length - f;
                            break
                        }
                        f = d + f;
                        c = c.nextSibling
                    }
                a.count -= n;
                return i
            },
            destroy: function () {
                var g = this._createdDiv;
                if (g) g.parentNode.removeChild(g),
                    this._createdDiv = null
            }
        };
        _TextView.prototype = {
            addKeyMode: function (g, a) {
                var c = this._keyModes;
                a !== void 0 ? c.splice(a, 0, g) : c.push(g);
                g._modeAdded && g._modeAdded()
            },
            addRuler: function (g, a) {
                g.setView(this);
                var c = this._rulers;
                if (a !== void 0) {
                    var d, b;
                    for (d = 0, b = 0; d < c.length && b < a; d++) g.getLocation() === c[d].getLocation() && b++;
                    c.splice(b, 0, g);
                    a = b
                } else c.push(g);
                this._createRuler(g, a);
                this._update()
            },
            computeSize: function () {
                var g = 0,
                    a = 0,
                    c = this._model,
                    b = this._clientDiv;
                if (!b) return {
                    width: g,
                    height: a
                };
                var i = b.style.width;
                if (d.isWebkit) b.style.width = "0x7fffffffpx";
                for (var c = c.getLineCount(), f = 0; f < c; f++) {
                    var m = this._getLine(f),
                        n = m.getBoundingClientRect(),
                        g = Math.max(g, n.right - n.left);
                    a += n.bottom - n.top;
                    m.destroy()
                }
                if (d.isWebkit) b.style.width = i;
                b = this._getViewPadding();
                g += b.right + b.left + this._metrics.scrollWidth;
                a += b.bottom + b.top + this._metrics.scrollWidth;
                return {
                    width: g,
                    height: a
                }
            },
            convert: function (g, a, c) {
                if (this._clientDiv) {
                    var d = this._getScroll(),
                        b = this._getViewPadding(),
                        i = this._viewDiv.getBoundingClientRect();
                    a === "document" && (g.x !== void 0 && (g.x += -d.x + i.left + b.left), g.y !== void 0 && (g.y += -d.y + i.top + b.top));
                    c === "document" && (g.x !== void 0 && (g.x += d.x - i.left - b.left), g.y !== void 0 && (g.y += d.y - i.top - b.top));
                    return g
                }
            },
            destroy: function () {
                for (var g = 0; g < this._rulers.length; g++) this._rulers[g].setView(null);
                this.rulers = null;
                this._destroyView();
                this.onDestroy({
                    type: "Destroy"
                });
                this._actions = this._keyModes = this._doubleClickSelection = this._selection = this._theme = this._model = this._parent = null
            },
            focus: function () {
                this._clientDiv && (this._updateDOMSelection(), d.isOpera && this._clientDiv.blur(), this._clientDiv.focus(), this._updateDOMSelection())
            },
            hasFocus: function () {
                return this._hasFocus
            },
            getActionDescription: function (g) {
                if (g = this._actions[g]) return g.actionDescription
            },
            getActions: function (g) {
                var a = [],
                    c = this._actions,
                    d;
                for (d in c) c.hasOwnProperty(d) && (g || !c[d].defaultHandler) && a.push(d);
                return a
            },
            getBottomIndex: function (g) {
                return !this._clientDiv ? 0 : this._getBottomIndex(g)
            },
            getBottomPixel: function () {
                return !this._clientDiv ? 0 : this._getScroll().y + this._getClientHeight()
            },
            getCaretOffset: function () {
                return this._getSelection().getCaret()
            },
            getClientArea: function () {
                if (!this._clientDiv) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var g = this._getScroll();
                return {
                    x: g.x,
                    y: g.y,
                    width: this._getClientWidth(),
                    height: this._getClientHeight()
                }
            },
            getHorizontalPixel: function () {
                return !this._clientDiv ? 0 : this._getScroll().x
            },
            getKeyBindings: function (g) {
                for (var a = [], c = this._keyModes, d = 0; d < c.length; d++) a = a.concat(c[d].getKeyBindings(g));
                return a
            },
            getKeyModes: function () {
                return this._keyModes.slice(0)
            },
            getLineHeight: function (g) {
                return !this._clientDiv ? 0 : this._getLineHeight(g)
            },
            getLineIndex: function (g) {
                return !this._clientDiv ? 0 : this._getLineIndex(g)
            },
            getLinePixel: function (g) {
                return !this._clientDiv ? 0 : this._getLinePixel(g)
            },
            getLocationAtOffset: function (g) {
                if (!this._clientDiv) return {
                    x: 0,
                    y: 0
                };
                var a = this._model,
                    g = Math.min(Math.max(0, g), a.getCharCount()),
                    a = a.getLineAtOffset(g),
                    c = this._getLine(a),
                    g = c.getBoundingClientRect(g);
                c.destroy();
                c = g.left;
                a = this._getLinePixel(a) + g.top;
                return {
                    x: c,
                    y: a
                }
            },
            getOptions: function () {
                var g;
                if (arguments.length === 0) g = this._defaultOptions();
                else if (arguments.length === 1) {
                    if (g = arguments[0], typeof g === "string") return f(this["_" + g])
                } else {
                    g = {};
                    for (var a in arguments) arguments.hasOwnProperty(a) && (g[arguments[a]] = void 0)
                }
                for (var c in g) g.hasOwnProperty(c) && (g[c] = f(this["_" + c]));
                return g
            },
            getModel: function () {
                return this._model
            },
            getOffsetAtLocation: function (g, a) {
                if (!this._clientDiv) return 0;
                var c = this._getLineIndex(a),
                    d = this._getLine(c),
                    c = d.getOffset(g, a - this._getLinePixel(c));
                d.destroy();
                return c
            },
            getRulers: function () {
                return this._rulers.slice(0)
            },
            getSelection: function () {
                var g = this._getSelection();
                return {
                    start: g.start,
                    end: g.end
                }
            },
            getText: function (g, a) {
                return this._model.getText(g, a)
            },
            getTopIndex: function (g) {
                return !this._clientDiv ? 0 : this._getTopIndex(g)
            },
            getTopPixel: function () {
                return !this._clientDiv ? 0 : this._getScroll().y
            },
            invokeAction: function (g, a, c) {
                if (this._clientDiv) {
                    if (g = this._actions[g]) {
                        if (!a && g.handler && g.handler(c)) return !0;
                        if (g.defaultHandler) return typeof g.defaultHandler(c) === "boolean"
                    }
                    return !1
                }
            },
            isDestroyed: function () {
                return !this._clientDiv
            },
            onContextMenu: function (g) {
                return this.dispatchEvent(g)
            },
            onDragStart: function (g) {
                return this.dispatchEvent(g)
            },
            onDrag: function (g) {
                return this.dispatchEvent(g)
            },
            onDragEnd: function (g) {
                return this.dispatchEvent(g)
            },
            onDragEnter: function (g) {
                return this.dispatchEvent(g)
            },
            onDragOver: function (g) {
                return this.dispatchEvent(g)
            },
            onDragLeave: function (g) {
                return this.dispatchEvent(g)
            },
            onDrop: function (g) {
                return this.dispatchEvent(g)
            },
            onDestroy: function (g) {
                return this.dispatchEvent(g)
            },
            onLineStyle: function (g) {
                return this.dispatchEvent(g)
            },
            onKeyDown: function (g) {
                return this.dispatchEvent(g)
            },
            onKeyPress: function (g) {
                return this.dispatchEvent(g)
            },
            onKeyUp: function (g) {
                return this.dispatchEvent(g)
            },
            onModelChanged: function (g) {
                return this.dispatchEvent(g)
            },
            onModelChanging: function (g) {
                return this.dispatchEvent(g)
            },
            onModify: function (g) {
                return this.dispatchEvent(g)
            },
            onMouseDown: function (g) {
                return this.dispatchEvent(g)
            },
            onMouseUp: function (g) {
                return this.dispatchEvent(g)
            },
            onMouseMove: function (g) {
                return this.dispatchEvent(g)
            },
            onMouseOver: function (g) {
                return this.dispatchEvent(g)
            },
            onMouseOut: function (g) {
                return this.dispatchEvent(g)
            },
            onSelection: function (g) {
                return this.dispatchEvent(g)
            },
            onScroll: function (g) {
                return this.dispatchEvent(g)
            },
            onVerify: function (g) {
                return this.dispatchEvent(g)
            },
            onFocus: function (g) {
                return this.dispatchEvent(g)
            },
            onBlur: function (g) {
                return this.dispatchEvent(g)
            },
            redraw: function () {
                if (!(this._redrawCount > 0)) {
                    var g = this._model.getLineCount();
                    this.redrawRulers(0, g);
                    this.redrawLines(0, g)
                }
            },
            redrawRulers: function (g, a) {
                if (!(this._redrawCount > 0))
                    for (var c = this.getRulers(), d = 0; d < c.length; d++) this.redrawLines(g, a, c[d])
            },
            redrawLines: function (g, a, c) {
                if (!(this._redrawCount > 0) && (g === void 0 && (g = 0), a === void 0 && (a = this._model.getLineCount()), g !== a)) {
                    var d = this._clientDiv;
                    if (d) {
                        if (c)
                            for (d = (c.getLocation() === "left" ? this._leftDiv : this._rightDiv).firstChild; d;) {
                                if (d._ruler === c) break;
                                d = d.nextSibling
                            }
                        c ? d.rulerChanged = !0 : this._lineHeight && this._resetLineHeight(g, a);
                        if (!c || c.getOverview() === "page")
                            for (d = d.firstChild; d;) {
                                var b = d.lineIndex;
                                if (g <= b && b < a) d.lineChanged = !0;
                                d = d.nextSibling
                            }
                        if (!c && !this._wrapMode && g <= this._maxLineIndex && this._maxLineIndex < a) this._checkMaxLineIndex = this._maxLineIndex,
                            this._maxLineIndex = -1,
                            this._maxLineWidth = 0;
                        this._queueUpdate()
                    }
                }
            },
            redrawRange: function (g, a) {
                if (!(this._redrawCount > 0)) {
                    var c = this._model;
                    g === void 0 && (g = 0);
                    a === void 0 && (a = c.getCharCount());
                    var d = c.getLineAtOffset(g),
                        c = c.getLineAtOffset(Math.max(g, a - 1)) + 1;
                    this.redrawLines(d, c)
                }
            },
            removeKeyMode: function (g) {
                for (var a = this._keyModes,
                    c = 0; c < a.length; c++)
                    if (a[c] === g) {
                        a.splice(c, 1);
                        break
                    }
                g._modeRemoved && g._modeRemoved()
            },
            removeRuler: function (g) {
                for (var a = this._rulers,
                    c = 0; c < a.length; c++)
                    if (a[c] === g) {
                        a.splice(c, 1);
                        g.setView(null);
                        this._destroyRuler(g);
                        this._update();
                        break
                    }
            },
            resize: function () {
                this._clientDiv && this._handleResize(null)
            },
            setAction: function (g, a, c) {
                if (g) {
                    var d = this._actions,
                        b = d[g];
                    b || (b = d[g] = {});
                    b.handler = a;
                    if (c !== void 0) b.actionDescription = c
                }
            },
            setKeyBinding: function (g, a) {
                this._keyModes[0].setKeyBinding(g, a)
            },
            setCaretOffset: function (g, a, c) {
                var d = this._model.getCharCount(),
                    g = Math.max(0, Math.min(g, d));
                this._setSelection(new j(g, g, !1), a === void 0 || a, !0, c)
            },
            setHorizontalPixel: function (g) {
                this._clientDiv && (g = Math.max(0, g), this._scrollView(g - this._getScroll().x, 0))
            },
            setRedraw: function (g) {
                g ? --this._redrawCount === 0 && this.redraw() : this._redrawCount++
            },
            setModel: function (g) {
                if (g && g !== this._model) {
                    this._model.removeEventListener("preChanging", this._modelListener.onChanging);
                    this._model.removeEventListener("postChanged", this._modelListener.onChanged);
                    var a = this._model.getLineCount(),
                        c = this._model.getCharCount(),
                        d = g.getLineCount(),
                        b = g.getCharCount(),
                        i = {
                            type: "ModelChanging",
                            text: g.getText(),
                            start: 0,
                            removedCharCount: c,
                            addedCharCount: b,
                            removedLineCount: a,
                            addedLineCount: d
                        };
                    this.onModelChanging(i);
                    this._model = g;
                    i = {
                        type: "ModelChanged",
                        start: 0,
                        removedCharCount: c,
                        addedCharCount: b,
                        removedLineCount: a,
                        addedLineCount: d
                    };
                    this.onModelChanged(i);
                    this._model.addEventListener("preChanging", this._modelListener.onChanging);
                    this._model.addEventListener("postChanged", this._modelListener.onChanged);
                    this._reset();
                    this._update()
                }
            },
            setOptions: function (g) {
                var a = this._defaultOptions(),
                    d;
                for (d in g)
                    if (g.hasOwnProperty(d)) {
                        var b = g[d];
                        if (!c(this["_" + d], b)) {
                            var i = a[d] ? a[d].update : null;
                            i ? i.call(this, b) : this["_" + d] = f(b)
                        }
                    }
            },
            setSelection: function (g, a, c, d) {
                var b = g > a;
                if (b) var i = g,
                    g = a,
                    a = i;
                i = this._model.getCharCount();
                g = Math.max(0, Math.min(g, i));
                a = Math.max(0, Math.min(a, i));
                this._setSelection(new j(g, a, b), c === void 0 || c, !0, d)
            },
            setText: function (g, a, c) {
                var b = a === void 0 && c === void 0;
                a === void 0 && (a = 0);
                c === void 0 && (c = this._model.getCharCount());
                if (b) this._variableLineHeight = !1;
                this._modifyContent({
                    text: g,
                    start: a,
                    end: c,
                    _code: !0
                },
                    !b);
                if (b) this._columnX = -1,
                    this._setSelection(new j(0, 0, !1), !0),
                    d.isFirefox && this._fixCaret()
            },
            setTopIndex: function (g) {
                this._clientDiv && this._scrollView(0, this._getLinePixel(Math.max(0, g)) - this._getScroll().y)
            },
            setTopPixel: function (g) {
                this._clientDiv && this._scrollView(0, Math.max(0, g) - this._getScroll().y)
            },
            showSelection: function () {
                return this._showCaret(!0)
            },
            update: function (g, a) {
                this._clientDiv && (g && this._updateStyle(), a === void 0 || a ? this._update() : this._queueUpdate())
            },
            _handleRootMouseDown: function (g) {
                if (!this._ignoreEvent(g)) {
                    if (d.isFirefox && g.which === 1) this._clientDiv.contentEditable = !1,
                        this._ignoreBlur = (this._overlayDiv || this._clientDiv).draggable = !0;
                    var a = this._overlayDiv || this._clientDiv;
                    if (d.isIE < 9) a = this._viewDiv;
                    for (var c = g.target ? g.target : g.srcElement; c;) {
                        if (a === c) return;
                        c = c.parentNode
                    }
                    g.preventDefault && g.preventDefault();
                    g.stopPropagation && g.stopPropagation();
                    if (!this._isW3CEvents) {
                        var b = this;
                        this._getWindow().setTimeout(function () {
                            b._clientDiv.focus()
                        },
                            0)
                    }
                }
            },
            _handleRootMouseUp: function (g) {
                if (!this._ignoreEvent(g) && d.isFirefox && g.which === 1) this._clientDiv.contentEditable = !0,
                    (this._overlayDiv || this._clientDiv).draggable = !1,
                    this._fixCaret(),
                    this._ignoreBlur = !1
            },
            _handleBlur: function () {
                if (!this._ignoreBlur) {
                    this._hasFocus = !1;
                    if (d.isIE < 9 && !this._getSelection().isEmpty()) {
                        var g = this._rootDiv,
                            a = d.createElement(g.ownerDocument, "div");
                        g.appendChild(a);
                        g.removeChild(a)
                    }
                    if (this._cursorDiv) this._cursorDiv.style.display = "none";
                    if (this._selDiv1)
                        if (this._selDiv1.style.background = "lightgray", this._selDiv2.style.background = "lightgray", this._selDiv3.style.background = "lightgray", g = this._getWindow(), a = this._selDiv1.ownerDocument, g.getSelection) {
                            a = g.getSelection();
                            for (g = a.anchorNode; g;) {
                                if (g === this._clientDiv) {
                                    a.rangeCount > 0 && a.removeAllRanges();
                                    break
                                }
                                g = g.parentNode
                            }
                        } else if (a.selection) {
                            this._ignoreSelect = !1;
                            for (g = a.selection.createRange().parentElement(); g;) {
                                if (g === this._clientDiv) {
                                    a.selection.empty();
                                    break
                                }
                                g = g.parentNode
                            }
                            this._ignoreSelect = !0
                        }
                    if (!this._ignoreFocus) this.onBlur({
                        type: "Blur"
                    })
                }
            },
            _handleContextMenu: function (g) {
                if (!this._ignoreEvent(g)) {
                    d.isIE && this._lastMouseButton === 3 && this._updateDOMSelection();
                    var a = !1;
                    this.isListening("ContextMenu") ? (a = this._createMouseEvent("ContextMenu", g), a.screenX = g.screenX, a.screenY = g.screenY, this.onContextMenu(a), a = a.defaultPrevented) : d.isMac && d.isFirefox && g.button === 0 && (a = !0);
                    if (a) return g.preventDefault && g.preventDefault(),
                        !1
                }
            },
            _handleCopy: function (g) {
                if (!this._ignoreEvent(g) && !this._ignoreCopy && this._doCopy(g)) return g.preventDefault && g.preventDefault(),
                    !1
            },
            _handleCut: function (g) {
                if (!this._ignoreEvent(g) && this._doCut(g)) return g.preventDefault && g.preventDefault(),
                    !1
            },
            _handleDataModified: function (g) {
                this._ignoreEvent(g) || this._startIME()
            },
            _handleDblclick: function (g) {
                if (!this._ignoreEvent(g) && (this._lastMouseTime = g.timeStamp ? g.timeStamp : (new Date).getTime(), this._clickCount !== 2)) this._clickCount = 2,
                    this._handleMouse(g)
            },
            _handleDragStart: function (g) {
                if (!this._ignoreEvent(g)) {
                    if (d.isFirefox) {
                        var a = this;
                        this._getWindow().setTimeout(function () {
                            a._clientDiv.contentEditable = !0;
                            a._clientDiv.draggable = !1;
                            a._ignoreBlur = !1
                        },
                            0)
                    }
                    if (this.isListening("DragStart") && this._dragOffset !== -1) this._isMouseDown = !1,
                        this.onDragStart(this._createMouseEvent("DragStart", g)),
                        this._dragOffset = -1;
                    else return g.preventDefault && g.preventDefault(),
                        !1
                }
            },
            _handleDrag: function (g) {
                if (!this._ignoreEvent(g) && this.isListening("Drag")) this.onDrag(this._createMouseEvent("Drag", g))
            },
            _handleDragEnd: function (g) {
                if (!this._ignoreEvent(g)) {
                    this._dropTarget = !1;
                    this._dragOffset = -1;
                    if (this.isListening("DragEnd")) this.onDragEnd(this._createMouseEvent("DragEnd", g));
                    d.isFirefox && (this._fixCaret(), g.dataTransfer.dropEffect === "none" && !g.dataTransfer.mozUserCancelled && this._fixCaret())
                }
            },
            _handleDragEnter: function (g) {
                if (!this._ignoreEvent(g)) {
                    var a = !0;
                    this._dropTarget = !0;
                    this.isListening("DragEnter") && (a = !1, this.onDragEnter(this._createMouseEvent("DragEnter", g)));
                    if (d.isWebkit || a) return g.preventDefault && g.preventDefault(),
                        !1
                }
            },
            _handleDragOver: function (g) {
                if (!this._ignoreEvent(g)) {
                    var a = !0;
                    this.isListening("DragOver") && (a = !1, this.onDragOver(this._createMouseEvent("DragOver", g)));
                    if (d.isWebkit || a) {
                        if (a) g.dataTransfer.dropEffect = "none";
                        g.preventDefault && g.preventDefault();
                        return !1
                    }
                }
            },
            _handleDragLeave: function (g) {
                if (!this._ignoreEvent(g) && (this._dropTarget = !1, this.isListening("DragLeave"))) this.onDragLeave(this._createMouseEvent("DragLeave", g))
            },
            _handleDrop: function (g) {
                if (!this._ignoreEvent(g)) {
                    this._dropTarget = !1;
                    if (this.isListening("Drop")) this.onDrop(this._createMouseEvent("Drop", g));
                    g.preventDefault && g.preventDefault();
                    return !1
                }
            },
            _handleFocus: function () {
                this._hasFocus = !0;
                d.isIOS && this._lastTouchOffset !== void 0 ? (this.setCaretOffset(this._lastTouchOffset, !0), this._lastTouchOffset = void 0) : this._updateDOMSelection();
                if (this._cursorDiv) this._cursorDiv.style.display = "block";
                if (this._selDiv1) {
                    var g = this._highlightRGB;
                    this._selDiv1.style.background = g;
                    this._selDiv2.style.background = g;
                    this._selDiv3.style.background = g
                }
                if (!this._ignoreFocus) this.onFocus({
                    type: "Focus"
                })
            },
            _handleKeyDown: function (g) {
                if (!this._ignoreEvent(g)) {
                    if (this.isListening("KeyDown")) {
                        var a = this._createKeyEvent("KeyDown", g);
                        this.onKeyDown(a);
                        if (a.defaultPrevented) {
                            if (d.isFirefox) this._keyDownPrevented = !0;
                            g.preventDefault();
                            return
                        }
                    }
                    a = !1;
                    switch (g.keyCode) {
                        case 16:
                        case 17:
                        case 18:
                        case 91:
                            a = !0;
                            break;
                        default:
                            this._setLinksVisible(!1)
                    }
                    if (g.keyCode === 229) {
                        if (this._readonly) return g.preventDefault && g.preventDefault(),
                            !1;
                        a = !0;
                        if (d.isSafari && d.isMac && g.ctrlKey) a = !1,
                            g.keyCode = 129;
                        a && this._startIME()
                    } else a || this._commitIME();
                    if ((d.isMac || d.isLinux) && d.isFirefox < 4 || d.isOpera) return this._keyDownEvent = g,
                        !0;
                    if (this._doAction(g)) return g.preventDefault ? (g.preventDefault(), g.stopPropagation()) : (g.cancelBubble = !0, g.returnValue = !1, g.keyCode = 0),
                        !1
                }
            },
            _handleKeyPress: function (g) {
                if (!this._ignoreEvent(g))
                    if (this._keyDownPrevented) g.preventDefault && (g.preventDefault(), g.stopPropagation()),
                        this._keyDownPrevented = void 0;
                    else {
                        if (d.isMac && d.isWebkit && (63232 <= g.keyCode && g.keyCode <= 63487 || g.keyCode === 13 || g.keyCode === 8)) return g.preventDefault && g.preventDefault(),
                            !1;
                        if (((d.isMac || d.isLinux) && d.isFirefox < 4 || d.isOpera) && this._doAction(this._keyDownEvent)) return g.preventDefault && g.preventDefault(),
                            !1;
                        var a = d.isMac ? g.metaKey : g.ctrlKey;
                        if (g.charCode !== void 0 && a) switch (g.charCode) {
                            case 99:
                            case 118:
                            case 120:
                                return !0
                        }
                        if (this.isListening("KeyPress") && (a = this._createKeyEvent("KeyPress", g), this.onKeyPress(a), a.defaultPrevented)) {
                            g.preventDefault();
                            return
                        }
                        if (this._doAction(g)) return g.preventDefault ? (g.preventDefault(), g.stopPropagation()) : (g.cancelBubble = !0, g.returnValue = !1, g.keyCode = 0),
                            !1;
                        a = !1;
                        if (d.isMac) {
                            if (g.ctrlKey || g.metaKey) a = !0
                        } else if (d.isFirefox) {
                            if (g.ctrlKey || g.altKey) a = !0
                        } else g.ctrlKey ^ g.altKey && (a = !0);
                        if (!a && (a = d.isOpera ? g.which : g.charCode !== void 0 ? g.charCode : g.keyCode, a > 31)) return this._doContent(String.fromCharCode(a)),
                            g.preventDefault && g.preventDefault(),
                            !1
                    }
            },
            _handleKeyUp: function (g) {
                if (!this._ignoreEvent(g)) {
                    if (this.isListening("KeyUp")) {
                        var a = this._createKeyEvent("KeyUp", g);
                        this.onKeyUp(a);
                        if (a.defaultPrevented) {
                            g.preventDefault();
                            return
                        }
                    } (d.isMac ? g.metaKey : g.ctrlKey) || this._setLinksVisible(!1);
                    g.keyCode === 13 && this._commitIME()
                }
            },
            _handleLinkClick: function (g) {
                if (!(d.isMac ? g.metaKey : g.ctrlKey)) return g.preventDefault && g.preventDefault(),
                    !1
            },
            _handleMouse: function (g) {
                var a = this._getWindow(),
                    c = !0,
                    b = a;
                if (d.isIE || d.isFirefox && !this._overlayDiv) b = this._clientDiv;
                if (this._overlayDiv) {
                    if (this._hasFocus) this._ignoreFocus = !0;
                    var i = this;
                    a.setTimeout(function () {
                        i.focus();
                        i._ignoreFocus = !1
                    },
                        0)
                }
                this._clickCount === 1 ? (c = this._setSelectionTo(g.clientX, g.clientY, g.shiftKey, !d.isOpera && this._hasFocus && this.isListening("DragStart"))) && this._setGrab(b) : (this._isW3CEvents && this._setGrab(b), this._doubleClickSelection = null, this._setSelectionTo(g.clientX, g.clientY, g.shiftKey), this._doubleClickSelection = this._getSelection());
                return c
            },
            _handleMouseDown: function (g) {
                if (!this._ignoreEvent(g)) {
                    if (this._linksVisible)
                        if ((g.target || g.srcElement).tagName !== "A") this._setLinksVisible(!1);
                        else return;
                    this._commitIME();
                    var a = g.which;
                    a || (g.button === 4 && (a = 2), g.button === 2 && (a = 3), g.button === 1 && (a = 1));
                    var c = a !== 2 && g.timeStamp ? g.timeStamp : (new Date).getTime(),
                        b = c - this._lastMouseTime,
                        i = Math.abs(this._lastMouseX - g.clientX),
                        f = Math.abs(this._lastMouseY - g.clientY),
                        m = this._lastMouseButton === a;
                    this._lastMouseX = g.clientX;
                    this._lastMouseY = g.clientY;
                    this._lastMouseTime = c;
                    this._lastMouseButton = a;
                    if (a === 1) this._isMouseDown = !0,
                        m && b <= this._clickTime && i <= this._clickDist && f <= this._clickDist ? this._clickCount++ : this._clickCount = 1;
                    if (this.isListening("MouseDown") && (c = this._createMouseEvent("MouseDown", g), this.onMouseDown(c), c.defaultPrevented)) {
                        g.preventDefault();
                        return
                    }
                    if (a === 1 && this._handleMouse(g) && (d.isIE >= 9 || d.isOpera || d.isChrome || d.isSafari || d.isFirefox && !this._overlayDiv)) this._hasFocus || this.focus(),
                        g.preventDefault();
                    d.isFirefox && this._lastMouseButton === 3 && this._updateDOMSelection()
                }
            },
            _handleMouseOver: function (g) {
                if (!this._ignoreEvent(g) && !this._animation && this.isListening("MouseOver")) this.onMouseOver(this._createMouseEvent("MouseOver", g))
            },
            _handleMouseOut: function (g) {
                if (!this._ignoreEvent(g) && !this._animation && this.isListening("MouseOut")) this.onMouseOut(this._createMouseEvent("MouseOut", g))
            },
            _handleMouseMove: function (g) {
                if (!this._animation) {
                    var a = this._isClientDiv(g);
                    if (this.isListening("MouseMove") && a) this.onMouseMove(this._createMouseEvent("MouseMove", g));
                    if (!this._dropTarget) {
                        var c = this._linksVisible || this._lastMouseMoveX !== g.clientX || this._lastMouseMoveY !== g.clientY;
                        this._lastMouseMoveX = g.clientX;
                        this._lastMouseMoveY = g.clientY;
                        this._setLinksVisible(c && !this._isMouseDown && (d.isMac ? g.metaKey : g.ctrlKey));
                        if (!this._isW3CEvents) {
                            if (g.button === 0) return this._setGrab(null),
                                !0;
                            if (!this._isMouseDown && g.button === 1 && (this._clickCount & 1) !== 0 && a) return this._clickCount = 2,
                                this._handleMouse(g, this._clickCount)
                        }
                        if (this._isMouseDown && this._dragOffset === -1) {
                            var a = g.clientX,
                                g = g.clientY,
                                b = this._getViewPadding(),
                                i = this._viewDiv.getBoundingClientRect(),
                                f = this._getClientWidth(),
                                m = this._getClientHeight(),
                                c = i.left + b.left,
                                n = i.top + b.top,
                                f = i.left + b.left + f,
                                b = i.top + b.top + m;
                            g < n ? this._doAutoScroll("up", a, g - n) : g > b ? this._doAutoScroll("down", a, g - b) : a < c && !this._wrapMode ? this._doAutoScroll("left", a - c, g) : a > f && !this._wrapMode ? this._doAutoScroll("right", a - f, g) : (this._endAutoScroll(), this._setSelectionTo(a, g, !0))
                        }
                    }
                }
            },
            _isClientDiv: function (g) {
                for (var a = this._overlayDiv || this._clientDiv,
                    g = g.target ? g.target : g.srcElement; g;) {
                    if (a === g) return !0;
                    g = g.parentNode
                }
                return !1
            },
            _createKeyEvent: function (g, a) {
                return {
                    type: g,
                    event: a,
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }
            },
            _createMouseEvent: function (g, a) {
                var c = this.convert({
                    x: a.clientX,
                    y: a.clientY
                },
                    "page", "document");
                return {
                    type: g,
                    event: a,
                    clickCount: this._clickCount,
                    x: c.x,
                    y: c.y,
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }
            },
            _handleMouseUp: function (g) {
                var a = g.which ? g.button === 0 : g.button === 1;
                if (this.isListening("MouseUp") && (this._isClientDiv(g) || a && this._isMouseDown)) this.onMouseUp(this._createMouseEvent("MouseUp", g));
                if (!this._linksVisible && a && this._isMouseDown) {
                    if (this._dragOffset !== -1) a = this._getSelection(),
                        a.extend(this._dragOffset),
                        a.collapse(),
                        this._setSelection(a, !0, !0),
                        this._dragOffset = -1;
                    this._isMouseDown = !1;
                    this._endAutoScroll();
                    this._isW3CEvents && this._setGrab(null);
                    d.isFirefox && g.preventDefault()
                }
            },
            _handleMouseWheel: function (g) {
                var a = this._getLineHeight(),
                    c = 0,
                    b = 0;
                d.isIE || d.isOpera ? b = -g.wheelDelta / 40 * a : d.isFirefox ? (a = d.isMac ? g.detail * 3 : Math.max(-256, Math.min(256, g.detail)) * a, g.axis === g.HORIZONTAL_AXIS ? c = a : b = a) : d.isMac ? (b = g.timeStamp - this._wheelTimeStamp, this._wheelTimeStamp = g.timeStamp, c = g.wheelDeltaX % 120 !== 0 ? 1 : b < 40 ? 40 / (40 - b) : 40, b = g.wheelDeltaY % 120 !== 0 ? 1 : b < 40 ? 40 / (40 - b) : 40, c = Math.ceil(-g.wheelDeltaX / c), -1 < c && c < 0 && (c = -1), 0 < c && c < 1 && (c = 1), b = Math.ceil(-g.wheelDeltaY / b), -1 < b && b < 0 && (b = -1), 0 < b && b < 1 && (b = 1)) : (c = -g.wheelDeltaX, b = -g.wheelDeltaY / 120 * 8 * a);
                if (d.isSafari) {
                    for (a = g.target; a && a.lineIndex === void 0;) a = a.parentNode;
                    this._mouseWheelLine = a
                }
                a = this._getScroll();
                this._scrollView(c, b);
                c = this._getScroll();
                if (a.x !== c.x || a.y !== c.y) return g.preventDefault && g.preventDefault(),
                    !1
            },
            _handlePaste: function (g) {
                if (!this._ignoreEvent(g) && !this._ignorePaste && this._doPaste(g)) {
                    if (d.isIE) {
                        var a = this;
                        this._ignoreFocus = !0;
                        this._getWindow().setTimeout(function () {
                            a._updateDOMSelection();
                            a._ignoreFocus = !1
                        },
                            0)
                    }
                    g.preventDefault && g.preventDefault();
                    return !1
                }
            },
            _handleResize: function () {
                var g = this._parent.clientWidth,
                    a = this._parent.clientHeight;
                if (this._parentWidth !== g || this._parentHeight !== a) this._parentWidth !== g && this._wrapMode && this._resetLineHeight(),
                    this._parentWidth = g,
                    this._parentHeight = a,
                    d.isIE < 9 ? this._queueUpdate() : this._update()
            },
            _handleRulerEvent: function (g) {
                for (var a = g.target ? g.target : g.srcElement, c = a.lineIndex; a && !a._ruler;) {
                    if (c === void 0 && a.lineIndex !== void 0) c = a.lineIndex;
                    a = a.parentNode
                }
                a = a ? a._ruler : null;
                if (c === void 0 && a && a.getOverview() === "document") {
                    var c = this._getClientHeight(),
                        d = this._model.getLineCount(),
                        b = this._getViewPadding(),
                        i = this._viewDiv.getBoundingClientRect(),
                        c = Math.floor((g.clientY - i.top - this._metrics.scrollWidth) * d / (c + b.top + b.bottom - 2 * this._metrics.scrollWidth));
                    0 <= c && c < d || (c = void 0)
                }
                if (a) switch (g.type) {
                    case "click":
                        if (a.onClick) a.onClick(c, g);
                        break;
                    case "dblclick":
                        if (a.onDblClick) a.onDblClick(c, g);
                        break;
                    case "mousemove":
                        if (a.onMouseMove) a.onMouseMove(c, g);
                        break;
                    case "mouseover":
                        if (a.onMouseOver) a.onMouseOver(c, g);
                        break;
                    case "mouseout":
                        if (a.onMouseOut) a.onMouseOut(c, g)
                }
            },
            _handleScroll: function () {
                var g = this._getScroll(!1),
                    a = this._hScroll,
                    c = this._vScroll;
                if (a !== g.x || c !== g.y) this._hScroll = g.x,
                    this._vScroll = g.y,
                    this._commitIME(),
                    this._update(c === g.y),
                    this.onScroll({
                        type: "Scroll",
                        oldValue: {
                            x: a,
                            y: c
                        },
                        newValue: g
                    })
            },
            _handleSelectStart: function (g) {
                if (this._ignoreSelect) return g && g.preventDefault && g.preventDefault(),
                    !1
            },
            _getModelOffset: function (g, a) {
                if (g) {
                    var c;
                    c = g.tagName === "DIV" ? g : g.parentNode.parentNode;
                    var d = 0,
                        b = c.lineIndex;
                    if (g.tagName !== "DIV")
                        for (c = c.firstChild; c;) {
                            var i = c.firstChild;
                            if (i === g) {
                                c.ignoreChars && (d -= c.ignoreChars);
                                d += a;
                                break
                            }
                            c.ignoreChars && (d -= c.ignoreChars);
                            d += i.data.length;
                            c = c.nextSibling
                        }
                    return Math.max(0, d) + this._model.getLineStart(b)
                }
            },
            _updateSelectionFromDOM: function () {
                var g = this._getWindow().getSelection(),
                    a = this._getModelOffset(g.anchorNode, g.anchorOffset),
                    g = this._getModelOffset(g.focusNode, g.focusOffset);
                a === void 0 || g === void 0 || this._setSelection(new j(a, g), !1, !1)
            },
            _handleSelectionChange: function () {
                if (this._imeOffset === -1)
                    if (d.isAndroid) {
                        var g = this._getWindow();
                        this._selTimer && g.clearTimeout(this._selTimer);
                        var a = this;
                        this._selTimer = g.setTimeout(function () {
                            if (a._clientDiv) a._selTimer = null,
                                a._updateSelectionFromDOM()
                        },
                            250)
                    } else this._updateSelectionFromDOM()
            },
            _handleTextInput: function (g) {
                if (!this._ignoreEvent(g)) {
                    this._imeOffset = -1;
                    if (d.isAndroid) {
                        for (var a = this._getWindow().getSelection(), c = a.anchorNode; c;) {
                            if (c.lineIndex !== void 0) break;
                            c = c.parentNode
                        }
                        if (c) {
                            var b = this._model,
                                i = c.lineIndex,
                                f = b.getLine(i),
                                m = f,
                                n = 0,
                                b = b.getLineStart(i);
                            if (a.rangeCount > 0) a.getRangeAt(0).deleteContents(),
                                i = c.ownerDocument.createTextNode(g.data),
                                a.getRangeAt(0).insertNode(i),
                                n = this._getDOMText(c, i),
                                m = n.text,
                                n = n.offset,
                                i.parentNode.removeChild(i);
                            c.lineRemoved = !0;
                            for (c = 0; f.charCodeAt(c) === m.charCodeAt(c) && c < n;) c++;
                            a = f.length - 1;
                            for (i = m.length - f.length; f.charCodeAt(a) === m.charCodeAt(a + i) && a + i >= n + g.data.length;) a--;
                            a++;
                            f = m.substring(c, a + i);
                            c += b;
                            a += b;
                            this._modifyContent({
                                text: f,
                                start: c,
                                end: a,
                                _ignoreDOMSelection: !0
                            },
                                !0)
                        }
                    } else this._doContent(g.data);
                    g.preventDefault()
                }
            },
            _handleTouchStart: function (g) {
                this._commitIME();
                var a = this._getWindow();
                if (this._touchScrollTimer) this._vScrollDiv.style.display = "none",
                    this._hScrollDiv.style.display = "none",
                    a.clearInterval(this._touchScrollTimer),
                    this._touchScrollTimer = null;
                var c = g.touches;
                if (c.length === 1) {
                    var c = c[0],
                        b = c.clientX,
                        i = c.clientY;
                    this._touchStartX = b;
                    this._touchStartY = i;
                    if (d.isAndroid && (i < c.pageY - a.pageYOffset || b < c.pageX - a.pageXOffset)) b = c.pageX - a.pageXOffset,
                        i = c.pageY - a.pageYOffset;
                    a = this.convert({
                        x: b,
                        y: i
                    },
                        "page", "document");
                    this._lastTouchOffset = this.getOffsetAtLocation(a.x, a.y);
                    this._touchStartTime = g.timeStamp;
                    this._touching = !0
                }
            },
            _handleTouchMove: function (g) {
                var a = g.touches;
                if (a.length === 1) {
                    a = a[0];
                    this._touchCurrentX = a.clientX;
                    this._touchCurrentY = a.clientY;
                    if (!this._touchScrollTimer && g.timeStamp - this._touchStartTime < 200) {
                        this._vScrollDiv.style.display = "block";
                        if (!this._wrapMode) this._hScrollDiv.style.display = "block";
                        var c = this,
                            d = this._getWindow();
                        this._touchScrollTimer = d.setInterval(function () {
                            var g = 0,
                                a = 0;
                            if (c._touching) g = c._touchStartX - c._touchCurrentX,
                                a = c._touchStartY - c._touchCurrentY,
                                c._touchSpeedX = g / 10,
                                c._touchSpeedY = a / 10,
                                c._touchStartX = c._touchCurrentX,
                                c._touchStartY = c._touchCurrentY;
                            else if (Math.abs(c._touchSpeedX) < 0.1 && Math.abs(c._touchSpeedY) < 0.1) {
                                c._vScrollDiv.style.display = "none";
                                c._hScrollDiv.style.display = "none";
                                d.clearInterval(c._touchScrollTimer);
                                c._touchScrollTimer = null;
                                return
                            } else g = c._touchSpeedX * 10,
                                a = c._touchSpeedY * 10,
                                c._touchSpeedX *= 0.95,
                                c._touchSpeedY *= 0.95;
                            c._scrollView(g, a)
                        },
                            10)
                    }
                    this._touchScrollTimer && g.preventDefault()
                }
            },
            _handleTouchEnd: function (g) {
                if (g.touches.length === 0) this._touching = !1
            },
            _doAction: function (g) {
                var a, c, d = this._keyModes;
                for (c = d.length - 1; c >= 0; c--)
                    if (a = d[c], typeof a.match === "function" && (a = a.match(g), a !== void 0)) return this.invokeAction(a);
                return !1
            },
            _doMove: function (g, a) {
                var c = this._model,
                    d = a.getCaret(),
                    b = c.getLineAtOffset(d);
                if (!g.count) g.count = 1;
                for (; g.count !== 0;) {
                    var i = c.getLineStart(b);
                    if (g.count < 0 && d === i)
                        if (b > 0) g.unit === "character" && g.count++,
                            b--,
                            a.extend(c.getLineEnd(b));
                        else break;
                    else if (g.count > 0 && d === c.getLineEnd(b))
                        if (b + 1 < c.getLineCount()) g.unit === "character" && g.count--,
                            b++,
                            a.extend(c.getLineStart(b));
                        else break;
                    else {
                        var f = !1;
                        g.expandTab && g.unit === "character" && (d - i) % this._tabSize === 0 && (f = !/[^ ]/.test(c.getText(i, d)));
                        f ? (a.extend(d - this._tabSize), g.count += g.count < 0 ? 1 : -1) : (i = this._getLine(b), a.extend(i.getNextOffset(d, g)), i.destroy())
                    }
                    d = a.getCaret()
                }
                return a
            },
            _doBackspace: function (g) {
                var a = this._getSelection();
                if (a.isEmpty()) {
                    if (!g.count) g.count = 1;
                    g.count *= -1;
                    g.expandTab = this._expandTab;
                    this._doMove(g, a)
                }
                this._modifyContent({
                    text: "",
                    start: a.start,
                    end: a.end
                },
                    !0);
                return !0
            },
            _doCase: function (g) {
                var a = this._getSelection();
                this._doMove(g, a);
                var c = this.getText(a.start, a.end);
                this._setSelection(a, !0);
                switch (g.type) {
                    case "lower":
                        c = c.toLowerCase();
                        break;
                    case "capitalize":
                        c = c.replace(/(?:^|\s)\S/g,
                            function (a) {
                                return a.toUpperCase()
                            });
                        break;
                    case "reverse":
                        g = "";
                        for (a = 0; a < c.length; a++) {
                            var d = c[a],
                                b = d.toLowerCase(),
                                d = b !== d ? b : d.toUpperCase();
                            g += d
                        }
                        c = g;
                        break;
                    default:
                        c = c.toUpperCase()
                }
                this._doContent(c);
                return !0
            },
            _doContent: function (a) {
                var c = this._getSelection();
                if (this._overwriteMode && c.isEmpty()) {
                    var d = this._model,
                        b = d.getLineAtOffset(c.end);
                    c.end < d.getLineEnd(b) && (d = this._getLine(b), c.extend(d.getNextOffset(c.getCaret(), {
                        unit: "character",
                        count: 1
                    })), d.destroy())
                }
                this._modifyContent({
                    text: a,
                    start: c.start,
                    end: c.end,
                    _ignoreDOMSelection: !0
                },
                    !0)
            },
            _doCopy: function (a) {
                var c = this._getSelection();
                return !c.isEmpty() ? this._setClipboardText(this._getBaseText(c.start, c.end), a) : !0
            },
            _doCursorNext: function (a) {
                var c = this._getSelection();
                !c.isEmpty() && !a.select ? c.start = c.end : this._doMove(a, c);
                a.select || c.collapse();
                this._setSelection(c, !0);
                return !0
            },
            _doCursorPrevious: function (a) {
                var c = this._getSelection();
                if (!c.isEmpty() && !a.select) c.end = c.start;
                else {
                    if (!a.count) a.count = 1;
                    a.count *= -1;
                    this._doMove(a, c)
                }
                a.select || c.collapse();
                this._setSelection(c, !0);
                return !0
            },
            _doCut: function (a) {
                var c = this._getSelection();
                return !c.isEmpty() ? (c = this._getBaseText(c.start, c.end), this._doContent(""), this._setClipboardText(c, a)) : !0
            },
            _doDelete: function (a) {
                var c = this._getSelection();
                c.isEmpty() && this._doMove(a, c);
                this._modifyContent({
                    text: "",
                    start: c.start,
                    end: c.end
                },
                    !0);
                return !0
            },
            _doEnd: function (a) {
                var c = this._getSelection(),
                    d = this._model,
                    b;
                if (a.ctrl) c.extend(d.getCharCount()),
                    b = function () { };
                else {
                    var i = c.getCaret(),
                        f = d.getLineAtOffset(i);
                    if (this._wrapMode) {
                        var m = this._getLine(f),
                            i = m.getLineIndex(i),
                            i = i === m.getLineCount() - 1 ? d.getLineEnd(f) : m.getLineStart(i + 1) - 1;
                        m.destroy()
                    } else a.count && a.count > 0 && (f = Math.min(f + a.count - 1, d.getLineCount() - 1)),
                        i = d.getLineEnd(f);
                    c.extend(i)
                }
                a.select || c.collapse();
                this._setSelection(c, !0, !0, b);
                return !0
            },
            _doEnter: function (a) {
                var c = this._model,
                    d = this._getSelection();
                this._doContent(c.getLineDelimiter());
                if (a && a.noCursor) d.end = d.start,
                    this._setSelection(d, !0);
                return !0
            },
            _doHome: function (a) {
                var c = this._getSelection(),
                    d = this._model,
                    b;
                if (a.ctrl) c.extend(0),
                    b = function () { };
                else {
                    var i = c.getCaret(),
                        f = d.getLineAtOffset(i);
                    this._wrapMode ? (d = this._getLine(f), i = d.getLineIndex(i), i = d.getLineStart(i), d.destroy()) : i = d.getLineStart(f);
                    c.extend(i)
                }
                a.select || c.collapse();
                this._setSelection(c, !0, !0, b);
                return !0
            },
            _doLineDown: function (a) {
                var c = this._model,
                    b = this._getSelection(),
                    i = b.getCaret(),
                    f = c.getLineAtOffset(i),
                    m = this._getLine(f),
                    n = this._columnX,
                    j = 1,
                    e = !1;
                if (n === -1 || a.wholeLine || a.select && d.isIE) n = a.wholeLine ? c.getLineEnd(f + 1) : i,
                    n = m.getBoundingClientRect(n).left;
                (i = m.getLineIndex(i)) < m.getLineCount() - 1 ? j = m.getClientRects(i + 1).top + 1 : (i = c.getLineCount() - 1, e = f === i, a.count && a.count > 0 ? f = Math.min(f + a.count, i) : f++);
                i = !1;
                if (e) {
                    if (a.select || d.isMac || d.isLinux) b.extend(c.getCharCount()),
                        i = !0
                } else m.lineIndex !== f && (m.destroy(), m = this._getLine(f)),
                    b.extend(m.getOffset(n, j)),
                    i = !0;
                i && (a.select || b.collapse(), this._setSelection(b, !0, !0));
                this._columnX = n;
                m.destroy();
                return !0
            },
            _doLineUp: function (a) {
                var c = this._model,
                    b = this._getSelection(),
                    i = b.getCaret(),
                    f = c.getLineAtOffset(i),
                    m = this._getLine(f),
                    n = this._columnX,
                    j = !1,
                    e;
                if (n === -1 || a.wholeLine || a.select && d.isIE) n = a.wholeLine ? c.getLineStart(f - 1) : i,
                    n = m.getBoundingClientRect(n).left;
                (i = m.getLineIndex(i)) > 0 ? e = m.getClientRects(i - 1).top + 1 : (j = f === 0, j || (a.count && a.count > 0 ? f = Math.max(f - a.count, 0) : f--, e = this._getLineHeight(f) - 1));
                i = !1;
                if (j) {
                    if (a.select || d.isMac || d.isLinux) b.extend(0),
                        i = !0
                } else m.lineIndex !== f && (m.destroy(), m = this._getLine(f)),
                    b.extend(m.getOffset(n, e)),
                    i = !0;
                i && (a.select || b.collapse(), this._setSelection(b, !0, !0));
                this._columnX = n;
                m.destroy();
                return !0
            },
            _doNoop: function () {
                return !0
            },
            _doPageDown: function (a) {
                var c = this,
                    b = this._model,
                    i = this._getSelection(),
                    f = i.getCaret(),
                    m = b.getLineAtOffset(f),
                    n = b.getLineCount(),
                    j = this._getScroll(),
                    b = this._getClientHeight(),
                    e,
                    h;
                if (this._lineHeight) {
                    e = this._columnX;
                    j = this._getBoundsAtOffset(f);
                    if (e === -1 || a.select && d.isIE) e = j.left;
                    f = this._getLineIndex(j.top + b);
                    h = this._getLine(f);
                    m = this._getLinePixel(f);
                    f = h.getOffset(e, j.top + b - m);
                    b = h.getBoundingClientRect(f);
                    h.destroy();
                    i.extend(f);
                    a.select || i.collapse();
                    this._setSelection(i, !0, !0,
                        function () {
                            c._columnX = e
                        },
                        b.top + m - j.top);
                    return !0
                }
                if (m < n - 1) {
                    var k = this._getLineHeight(),
                        q = Math.min(n - m - 1, Math.floor(b / k)),
                        q = Math.max(1, q);
                    e = this._columnX;
                    if (e === -1 || a.select && d.isIE) h = this._getLine(m),
                        e = h.getBoundingClientRect(f).left,
                        h.destroy();
                    h = this._getLine(m + q);
                    i.extend(h.getOffset(e, 0));
                    h.destroy();
                    a.select || i.collapse();
                    a = n * k;
                    f = j.y + q * k;
                    f + b > a && (f = a - b);
                    this._setSelection(i, !0, !0,
                        function () {
                            c._columnX = e
                        },
                        f - j.y)
                }
                return !0
            },
            _doPageUp: function (a) {
                var c = this,
                    b = this._model,
                    i = this._getSelection(),
                    f = i.getCaret(),
                    m = b.getLineAtOffset(f),
                    n = this._getScroll(),
                    j = this._getClientHeight(),
                    e;
                if (this._lineHeight) {
                    e = this._columnX;
                    n = this._getBoundsAtOffset(f);
                    if (e === -1 || a.select && d.isIE) e = n.left;
                    f = this._getLineIndex(n.bottom - j);
                    b = this._getLine(f);
                    m = this._getLinePixel(f);
                    f = b.getOffset(e, n.bottom - j - m);
                    j = b.getBoundingClientRect(f);
                    b.destroy();
                    i.extend(f);
                    a.select || i.collapse();
                    this._setSelection(i, !0, !0,
                        function () {
                            c._columnX = e
                        },
                        j.top + m - n.top);
                    return !0
                }
                if (m > 0) {
                    var h = this._getLineHeight(),
                        j = Math.max(1, Math.min(m, Math.floor(j / h)));
                    e = this._columnX;
                    if (e === -1 || a.select && d.isIE) b = this._getLine(m),
                        e = b.getBoundingClientRect(f).left,
                        b.destroy();
                    b = this._getLine(m - j);
                    i.extend(b.getOffset(e, this._getLineHeight(m - j) - 1));
                    b.destroy();
                    a.select || i.collapse();
                    a = Math.max(0, n.y - j * h);
                    this._setSelection(i, !0, !0,
                        function () {
                            c._columnX = e
                        },
                        a - n.y)
                }
                return !0
            },
            _doPaste: function (a) {
                var c = this;
                return this._getClipboardText(a,
                    function (a) {
                        a && (d.isLinux && c._lastMouseButton === 2 && (new Date).getTime() - c._lastMouseTime <= c._clickTime && c._setSelectionTo(c._lastMouseX, c._lastMouseY), c._doContent(a))
                    }) !== null
            },
            _doScroll: function (a) {
                var c = a.type,
                    b = this._model,
                    d = b.getLineCount(),
                    a = this._getClientHeight(),
                    i = this._getLineHeight();
                d *= i;
                var f = this._getScroll().y,
                    m;
                switch (c) {
                    case "textStart":
                        m = 0;
                        break;
                    case "textEnd":
                        m = d - a;
                        break;
                    case "pageDown":
                        m = f + a;
                        break;
                    case "pageUp":
                        m = f - a;
                        break;
                    case "lineDown":
                        m = f + i;
                        break;
                    case "lineUp":
                        m = f - i;
                        break;
                    case "centerLine":
                        c = this._getSelection(),
                            m = b.getLineAtOffset(c.start),
                            b = (b.getLineAtOffset(c.end) - m + 1) * i,
                            m = m * i - a / 2 + b / 2
                }
                m !== void 0 && (m = Math.min(Math.max(0, m), d - a), this._scrollViewAnimated(0, m - f,
                    function () { }));
                return !0
            },
            _doSelectAll: function () {
                var a = this._model,
                    c = this._getSelection();
                c.setCaret(0);
                c.extend(a.getCharCount());
                this._setSelection(c, !1);
                return !0
            },
            _doTab: function () {
                if (this._tabMode && !this._readonly) {
                    var a = "\t";
                    if (this._expandTab) var c = this._model,
                        a = this._getSelection().getCaret(),
                        b = c.getLineAtOffset(a),
                        c = c.getLineStart(b),
                        a = Array(this._tabSize - (a - c) % this._tabSize + 1).join(" ");
                    this._doContent(a);
                    return !0
                }
            },
            _doShiftTab: function () {
                return !this._tabMode || this._readonly ? void 0 : !0
            },
            _doOverwriteMode: function () {
                if (!this._readonly) return this.setOptions({
                    overwriteMode: !this.getOptions("overwriteMode")
                }),
                    !0
            },
            _doTabMode: function () {
                this._tabMode = !this._tabMode;
                return !0
            },
            _doWrapMode: function () {
                this.setOptions({
                    wrapMode: !this.getOptions("wrapMode")
                });
                return !0
            },
            _autoScroll: function () {
                var a = this._model,
                    c = this._getSelection(),
                    b = this.convert({
                        x: this._autoScrollX,
                        y: this._autoScrollY
                    },
                        "page", "document"),
                    i = c.getCaret(),
                    f = a.getLineCount(),
                    m = a.getLineAtOffset(i),
                    n;
                if (this._autoScrollDir === "up" || this._autoScrollDir === "down") i = this._autoScrollY / this._getLineHeight(),
                    i = i < 0 ? Math.floor(i) : Math.ceil(i),
                    n = Math.max(0, Math.min(f - 1, m + i));
                else if (this._autoScrollDir === "left" || this._autoScrollDir === "right") n = this._getLineIndex(b.y),
                    m = this._getLine(m),
                    b.x += m.getBoundingClientRect(i, !1).left,
                    m.destroy();
                n === 0 && (d.isMac || d.isLinux) ? c.extend(0) : n === f - 1 && (d.isMac || d.isLinux) ? c.extend(a.getCharCount()) : (m = this._getLine(n), c.extend(m.getOffset(b.x, b.y - this._getLinePixel(n))), m.destroy());
                this._setSelection(c, !0)
            },
            _autoScrollTimer: function () {
                this._autoScroll();
                var a = this;
                this._autoScrollTimerID = this._getWindow().setTimeout(function () {
                    a._autoScrollTimer()
                },
                    this._AUTO_SCROLL_RATE)
            },
            _calculateLineHeightTimer: function (a) {
                if (this._lineHeight && !this._calculateLHTimer) {
                    var c = this._model.getLineCount(),
                        b = 0;
                    if (a) {
                        for (var a = 0,
                            d = (new Date).getTime(), i = 0; b < c;)
                            if (this._lineHeight[b] || (a++, i || (i = b), this._lineHeight[b] = this._calculateLineHeight(b)), b++, (new Date).getTime() - d > 100) break;
                        this.redrawRulers(0, c);
                        this._queueUpdate()
                    }
                    a = this._getWindow();
                    if (b !== c) {
                        var f = this;
                        this._calculateLHTimer = a.setTimeout(function () {
                            f._calculateLHTimer = null;
                            f._calculateLineHeightTimer(!0)
                        },
                            0)
                    } else if (this._calculateLHTimer) a.clearTimeout(this._calculateLHTimer),
                        this._calculateLHTimer = void 0
                }
            },
            _calculateLineHeight: function (a) {
                var a = this._getLine(a),
                    c = a.getBoundingClientRect();
                a.destroy();
                return Math.max(1, c.bottom - c.top)
            },
            _calculateMetrics: function () {
                var a = this._clientDiv,
                    c = a.ownerDocument,
                    b = d.createElement(c, "div");
                b.style.lineHeight = "normal";
                var i = {
                    type: "LineStyle",
                    textView: this,
                    0: 0,
                    lineText: this._model.getLine(0),
                    lineStart: 0
                };
                this.onLineStyle(i);
                k(i.style, b);
                b.style.position = "fixed";
                b.style.left = "-1000px";
                var f = d.createElement(c, "span");
                f.appendChild(c.createTextNode(" "));
                b.appendChild(f);
                var j = d.createElement(c, "span");
                j.style.fontStyle = "italic";
                j.appendChild(c.createTextNode(" "));
                b.appendChild(j);
                var e = d.createElement(c, "span");
                e.style.fontWeight = "bold";
                e.appendChild(c.createTextNode(" "));
                b.appendChild(e);
                i = d.createElement(c, "span");
                i.style.fontWeight = "bold";
                i.style.fontStyle = "italic";
                i.appendChild(c.createTextNode(" "));
                b.appendChild(i);
                a.appendChild(b);
                var h = b.getBoundingClientRect(),
                    f = f.getBoundingClientRect(),
                    j = j.getBoundingClientRect(),
                    e = e.getBoundingClientRect(),
                    i = i.getBoundingClientRect(),
                    f = f.bottom - f.top,
                    j = j.bottom - j.top,
                    e = e.bottom - e.top,
                    q = i.bottom - i.top,
                    B = 0,
                    i = h.bottom - h.top <= 0,
                    h = Math.max(1, h.bottom - h.top);
                j > f && (B = 1);
                e > j && (B = 2);
                q > e && (B = 3);
                var r;
                if (B !== 0) {
                    r = {
                        style: {}
                    };
                    if ((B & 1) !== 0) r.style.fontStyle = "italic";
                    if ((B & 2) !== 0) r.style.fontWeight = "bold"
                }
                f = n(b);
                a.removeChild(b);
                j = m(this._viewDiv);
                b = d.createElement(c, "div");
                b.style.position = "fixed";
                b.style.left = "-1000px";
                b.style.paddingLeft = j.left + "px";
                b.style.paddingTop = j.top + "px";
                b.style.paddingRight = j.right + "px";
                b.style.paddingBottom = j.bottom + "px";
                b.style.width = "100px";
                b.style.height = "100px";
                e = d.createElement(c, "div");
                e.style.width = "100%";
                e.style.height = "100%";
                b.appendChild(e);
                a.appendChild(b);
                c = b.getBoundingClientRect();
                j = e.getBoundingClientRect();
                b.style.overflow = "hidden";
                e.style.height = "200px";
                e = b.clientWidth;
                b.style.overflow = "scroll";
                q = b.clientWidth;
                a.removeChild(b);
                j = {
                    left: j.left - c.left,
                    top: j.top - c.top,
                    right: c.right - j.right,
                    bottom: c.bottom - j.bottom
                };
                return {
                    lineHeight: h,
                    largestFontStyle: r,
                    lineTrim: f,
                    viewPadding: j,
                    scrollWidth: e - q,
                    invalid: i
                }
            },
            _cancelAnimation: function () {
                if (this._animation) this._animation.stop(),
                    this._animation = null
            },
            _clearSelection: function (a) {
                var c = this._getSelection();
                if (c.isEmpty()) return !1;
                a === "next" ? c.start = c.end : c.end = c.start;
                this._setSelection(c, !0);
                return !0
            },
            _commitIME: function () {
                if (this._imeOffset !== -1) {
                    this._scrollDiv.focus();
                    this._clientDiv.focus();
                    var a = this._model,
                        c = a.getLineAtOffset(this._imeOffset),
                        b = a.getLineStart(c),
                        d = this._getDOMText(this._getLineNode(c)).text,
                        a = a.getLine(c),
                        b = this._imeOffset - b,
                        a = b + d.length - a.length;
                    b !== a && this._doContent(d.substring(b, a));
                    this._imeOffset = -1
                }
            },
            _createActions: function () {
                this.addKeyMode(new o.DefaultKeyMode(this));
                var c = this;
                this._actions = {
                    noop: {
                        defaultHandler: function () {
                            return c._doNoop()
                        }
                    },
                    lineUp: {
                        defaultHandler: function (b) {
                            return c._doLineUp(a(b, {
                                select: !1
                            }))
                        },
                        actionDescription: {
                            name: l.lineUp
                        }
                    },
                    lineDown: {
                        defaultHandler: function (b) {
                            return c._doLineDown(a(b, {
                                select: !1
                            }))
                        },
                        actionDescription: {
                            name: l.lineDown
                        }
                    },
                    lineStart: {
                        defaultHandler: function (b) {
                            return c._doHome(a(b, {
                                select: !1,
                                ctrl: !1
                            }))
                        },
                        actionDescription: {
                            name: l.lineStart
                        }
                    },
                    lineEnd: {
                        defaultHandler: function (b) {
                            return c._doEnd(a(b, {
                                select: !1,
                                ctrl: !1
                            }))
                        },
                        actionDescription: {
                            name: l.lineEnd
                        }
                    },
                    charPrevious: {
                        defaultHandler: function (b) {
                            return c._doCursorPrevious(a(b, {
                                select: !1,
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.charPrevious
                        }
                    },
                    charNext: {
                        defaultHandler: function (b) {
                            return c._doCursorNext(a(b, {
                                select: !1,
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.charNext
                        }
                    },
                    pageUp: {
                        defaultHandler: function (b) {
                            return c._doPageUp(a(b, {
                                select: !1
                            }))
                        },
                        actionDescription: {
                            name: l.pageUp
                        }
                    },
                    pageDown: {
                        defaultHandler: function (b) {
                            return c._doPageDown(a(b, {
                                select: !1
                            }))
                        },
                        actionDescription: {
                            name: l.pageDown
                        }
                    },
                    scrollPageUp: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "pageUp"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollPageUp
                        }
                    },
                    scrollPageDown: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "pageDown"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollPageDown
                        }
                    },
                    scrollLineUp: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "lineUp"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollLineUp
                        }
                    },
                    scrollLineDown: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "lineDown"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollLineDown
                        }
                    },
                    wordPrevious: {
                        defaultHandler: function (b) {
                            return c._doCursorPrevious(a(b, {
                                select: !1,
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.wordPrevious
                        }
                    },
                    wordNext: {
                        defaultHandler: function (b) {
                            return c._doCursorNext(a(b, {
                                select: !1,
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.wordNext
                        }
                    },
                    textStart: {
                        defaultHandler: function (b) {
                            return c._doHome(a(b, {
                                select: !1,
                                ctrl: !0
                            }))
                        },
                        actionDescription: {
                            name: l.textStart
                        }
                    },
                    textEnd: {
                        defaultHandler: function (b) {
                            return c._doEnd(a(b, {
                                select: !1,
                                ctrl: !0
                            }))
                        },
                        actionDescription: {
                            name: l.textEnd
                        }
                    },
                    scrollTextStart: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "textStart"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollTextStart
                        }
                    },
                    scrollTextEnd: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "textEnd"
                            }))
                        },
                        actionDescription: {
                            name: l.scrollTextEnd
                        }
                    },
                    centerLine: {
                        defaultHandler: function (b) {
                            return c._doScroll(a(b, {
                                type: "centerLine"
                            }))
                        },
                        actionDescription: {
                            name: l.centerLine
                        }
                    },
                    selectLineUp: {
                        defaultHandler: function (b) {
                            return c._doLineUp(a(b, {
                                select: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectLineUp
                        }
                    },
                    selectLineDown: {
                        defaultHandler: function (b) {
                            return c._doLineDown(a(b, {
                                select: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectLineDown
                        }
                    },
                    selectWholeLineUp: {
                        defaultHandler: function (b) {
                            return c._doLineUp(a(b, {
                                select: !0,
                                wholeLine: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectWholeLineUp
                        }
                    },
                    selectWholeLineDown: {
                        defaultHandler: function (b) {
                            return c._doLineDown(a(b, {
                                select: !0,
                                wholeLine: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectWholeLineDown
                        }
                    },
                    selectLineStart: {
                        defaultHandler: function (b) {
                            return c._doHome(a(b, {
                                select: !0,
                                ctrl: !1
                            }))
                        },
                        actionDescription: {
                            name: l.selectLineStart
                        }
                    },
                    selectLineEnd: {
                        defaultHandler: function (b) {
                            return c._doEnd(a(b, {
                                select: !0,
                                ctrl: !1
                            }))
                        },
                        actionDescription: {
                            name: l.selectLineEnd
                        }
                    },
                    selectCharPrevious: {
                        defaultHandler: function (b) {
                            return c._doCursorPrevious(a(b, {
                                select: !0,
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.selectCharPrevious
                        }
                    },
                    selectCharNext: {
                        defaultHandler: function (b) {
                            return c._doCursorNext(a(b, {
                                select: !0,
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.selectCharNext
                        }
                    },
                    selectPageUp: {
                        defaultHandler: function (b) {
                            return c._doPageUp(a(b, {
                                select: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectPageUp
                        }
                    },
                    selectPageDown: {
                        defaultHandler: function (b) {
                            return c._doPageDown(a(b, {
                                select: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectPageDown
                        }
                    },
                    selectWordPrevious: {
                        defaultHandler: function (b) {
                            return c._doCursorPrevious(a(b, {
                                select: !0,
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.selectWordPrevious
                        }
                    },
                    selectWordNext: {
                        defaultHandler: function (b) {
                            return c._doCursorNext(a(b, {
                                select: !0,
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.selectWordNext
                        }
                    },
                    selectTextStart: {
                        defaultHandler: function (b) {
                            return c._doHome(a(b, {
                                select: !0,
                                ctrl: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectTextStart
                        }
                    },
                    selectTextEnd: {
                        defaultHandler: function (b) {
                            return c._doEnd(a(b, {
                                select: !0,
                                ctrl: !0
                            }))
                        },
                        actionDescription: {
                            name: l.selectTextEnd
                        }
                    },
                    deletePrevious: {
                        defaultHandler: function (b) {
                            return c._doBackspace(a(b, {
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.deletePrevious
                        }
                    },
                    deleteNext: {
                        defaultHandler: function (b) {
                            return c._doDelete(a(b, {
                                unit: "character"
                            }))
                        },
                        actionDescription: {
                            name: l.deleteNext
                        }
                    },
                    deleteWordPrevious: {
                        defaultHandler: function (b) {
                            return c._doBackspace(a(b, {
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.deleteWordPrevious
                        }
                    },
                    deleteWordNext: {
                        defaultHandler: function (b) {
                            return c._doDelete(a(b, {
                                unit: "word"
                            }))
                        },
                        actionDescription: {
                            name: l.deleteWordNext
                        }
                    },
                    deleteLineStart: {
                        defaultHandler: function (b) {
                            return c._doBackspace(a(b, {
                                unit: "line"
                            }))
                        },
                        actionDescription: {
                            name: l.deleteLineStart
                        }
                    },
                    deleteLineEnd: {
                        defaultHandler: function (b) {
                            return c._doDelete(a(b, {
                                unit: "line"
                            }))
                        },
                        actionDescription: {
                            name: l.deleteLineEnd
                        }
                    },
                    tab: {
                        defaultHandler: function () {
                            return c._doTab()
                        },
                        actionDescription: {
                            name: l.tab
                        }
                    },
                    shiftTab: {
                        defaultHandler: function () {
                            return c._doShiftTab()
                        },
                        actionDescription: {
                            name: l.shiftTab
                        }
                    },
                    enter: {
                        defaultHandler: function () {
                            return c._doEnter()
                        },
                        actionDescription: {
                            name: l.enter
                        }
                    },
                    enterNoCursor: {
                        defaultHandler: function (b) {
                            return c._doEnter(a(b, {
                                noCursor: !0
                            }))
                        },
                        actionDescription: {
                            name: l.enterNoCursor
                        }
                    },
                    selectAll: {
                        defaultHandler: function () {
                            return c._doSelectAll()
                        },
                        actionDescription: {
                            name: l.selectAll
                        }
                    },
                    copy: {
                        defaultHandler: function () {
                            return c._doCopy()
                        },
                        actionDescription: {
                            name: l.copy
                        }
                    },
                    cut: {
                        defaultHandler: function () {
                            return c._doCut()
                        },
                        actionDescription: {
                            name: l.cut
                        }
                    },
                    paste: {
                        defaultHandler: function () {
                            return c._doPaste()
                        },
                        actionDescription: {
                            name: l.paste
                        }
                    },
                    uppercase: {
                        defaultHandler: function (b) {
                            return c._doCase(a(b, {
                                type: "upper"
                            }))
                        },
                        actionDescription: {
                            name: l.uppercase
                        }
                    },
                    lowercase: {
                        defaultHandler: function (b) {
                            return c._doCase(a(b, {
                                type: "lower"
                            }))
                        },
                        actionDescription: {
                            name: l.lowercase
                        }
                    },
                    capitalize: {
                        defaultHandler: function (b) {
                            return c._doCase(a(b, {
                                unit: "word",
                                type: "capitalize"
                            }))
                        },
                        actionDescription: {
                            name: l.capitalize
                        }
                    },
                    reversecase: {
                        defaultHandler: function (b) {
                            return c._doCase(a(b, {
                                type: "reverse"
                            }))
                        },
                        actionDescription: {
                            name: l.reversecase
                        }
                    },
                    toggleOverwriteMode: {
                        defaultHandler: function () {
                            return c._doOverwriteMode()
                        },
                        actionDescription: {
                            name: l.toggleOverwriteMode
                        }
                    },
                    toggleTabMode: {
                        defaultHandler: function () {
                            return c._doTabMode()
                        },
                        actionDescription: {
                            name: l.toggleTabMode
                        }
                    },
                    toggleWrapMode: {
                        defaultHandler: function () {
                            return c._doWrapMode()
                        },
                        actionDescription: {
                            name: l.toggleWrapMode
                        }
                    }
                }
            },
            _createRuler: function (a, c) {
                if (this._clientDiv) {
                    var b = a.getLocation() === "left" ? this._leftDiv : this._rightDiv;
                    b.style.display = "block";
                    var i = d.createElement(b.ownerDocument, "div");
                    i._ruler = a;
                    i.rulerChanged = !0;
                    i.style.position = "relative";
                    i.style.cssFloat = "left";
                    i.style.styleFloat = "left";
                    i.style.borderWidth = "0px";
                    i.style.margin = "0px";
                    i.style.padding = "0px";
                    i.style.outline = "none";
                    if (c === void 0 || c < 0 || c >= b.children.length) b.appendChild(i);
                    else {
                        for (var f = b.firstChild; f && --c > 0;) f = f.nextSibling;
                        b.insertBefore(i, f)
                    }
                }
            },
            _createView: function () {
                if (!this._clientDiv) {
                    for (var a = this._parent; a.hasChildNodes();) a.removeChild(a.lastChild);
                    var c = a.ownerDocument,
                        b = d.createElement(c, "div");
                    this._rootDiv = b;
                    b.tabIndex = -1;
                    b.style.position = "relative";
                    b.style.overflow = "hidden";
                    b.style.width = "100%";
                    b.style.height = "100%";
                    b.style.overflow = "hidden";
                    b.style.WebkitTextSizeAdjust = "100%";
                    b.setAttribute("role", "application");
                    a.appendChild(b);
                    a = d.createElement(c, "div");
                    a.className = "textviewLeftRuler";
                    this._leftDiv = a;
                    a.tabIndex = -1;
                    a.style.overflow = "hidden";
                    a.style.MozUserSelect = "none";
                    a.style.WebkitUserSelect = "none";
                    a.style.position = "absolute";
                    a.style.top = "0px";
                    a.style.bottom = "0px";
                    a.style.cursor = "default";
                    a.style.display = "none";
                    a.setAttribute("aria-hidden", "true");
                    b.appendChild(a);
                    a = d.createElement(c, "div");
                    a.className = "textviewScroll";
                    this._viewDiv = a;
                    a.tabIndex = -1;
                    a.style.overflow = "auto";
                    a.style.position = "absolute";
                    a.style.top = "0px";
                    a.style.bottom = "0px";
                    a.style.borderWidth = "0px";
                    a.style.margin = "0px";
                    a.style.outline = "none";
                    a.style.background = "transparent";
                    if (d.isMac && d.isWebkit) a.style.pointerEvents = "none",
                        a.style.zIndex = "2";
                    b.appendChild(a);
                    var i = d.createElement(c, "div");
                    i.className = "textviewRightRuler";
                    this._rightDiv = i;
                    i.tabIndex = -1;
                    i.style.display = "none";
                    i.style.overflow = "hidden";
                    i.style.MozUserSelect = "none";
                    i.style.WebkitUserSelect = "none";
                    i.style.position = "absolute";
                    i.style.top = "0px";
                    i.style.bottom = "0px";
                    i.style.cursor = "default";
                    i.style.right = "0px";
                    i.setAttribute("aria-hidden", "true");
                    b.appendChild(i);
                    this._scrollDiv = i = d.createElement(c, "div");
                    i.style.margin = "0px";
                    i.style.borderWidth = "0px";
                    i.style.padding = "0px";
                    a.appendChild(i);
                    if (d.isFirefox) this._clipboardDiv = a = d.createElement(c, "div"),
                        a.style.position = "fixed",
                        a.style.whiteSpace = "pre",
                        a.style.left = "-1000px",
                        b.appendChild(a);
                    if (!d.isIE && !d.isIOS) this._clipDiv = a = d.createElement(c, "div"),
                        a.style.position = "absolute",
                        a.style.overflow = "hidden",
                        a.style.margin = "0px",
                        a.style.borderWidth = "0px",
                        a.style.padding = "0px",
                        a.style.background = "transparent",
                        b.appendChild(a),
                        this._clipScrollDiv = i = d.createElement(c, "div"),
                        i.style.position = "absolute",
                        i.style.height = "1px",
                        i.style.top = "-1000px",
                        i.style.background = "transparent",
                        a.appendChild(i);
                    this._setFullSelection(this._fullSelection, !0);
                    a = d.createElement(c, "div");
                    a.className = "textviewContent";
                    this._clientDiv = a;
                    a.style.position = "absolute";
                    a.style.borderWidth = "0px";
                    a.style.margin = "0px";
                    a.style.padding = "0px";
                    a.style.outline = "none";
                    a.style.zIndex = "1";
                    a.style.WebkitUserSelect = "text";
                    a.setAttribute("spellcheck", "false");
                    if (d.isIOS || d.isAndroid) a.style.WebkitTapHighlightColor = "transparent";
                    (this._clipDiv || b).appendChild(a);
                    if (d.isIOS || d.isAndroid) this._vScrollDiv = i = d.createElement(c, "div"),
                        i.style.position = "absolute",
                        i.style.borderWidth = "1px",
                        i.style.borderColor = "white",
                        i.style.borderStyle = "solid",
                        i.style.borderRadius = "4px",
                        i.style.backgroundColor = "black",
                        i.style.opacity = "0.5",
                        i.style.margin = "0px",
                        i.style.padding = "0px",
                        i.style.outline = "none",
                        i.style.zIndex = "3",
                        i.style.width = "8px",
                        i.style.display = "none",
                        b.appendChild(i),
                        this._hScrollDiv = i = d.createElement(c, "div"),
                        i.style.position = "absolute",
                        i.style.borderWidth = "1px",
                        i.style.borderColor = "white",
                        i.style.borderStyle = "solid",
                        i.style.borderRadius = "4px",
                        i.style.backgroundColor = "black",
                        i.style.opacity = "0.5",
                        i.style.margin = "0px",
                        i.style.padding = "0px",
                        i.style.outline = "none",
                        i.style.zIndex = "3",
                        i.style.height = "8px",
                        i.style.display = "none",
                        b.appendChild(i);
                    if (d.isFirefox && !a.setCapture) this._overlayDiv = c = d.createElement(c, "div"),
                        c.style.position = a.style.position,
                        c.style.borderWidth = a.style.borderWidth,
                        c.style.margin = a.style.margin,
                        c.style.padding = a.style.padding,
                        c.style.cursor = "text",
                        c.style.zIndex = "2",
                        (this._clipDiv || b).appendChild(c);
                    a.contentEditable = "true";
                    a.setAttribute("role", "textbox");
                    a.setAttribute("aria-multiline", "true");
                    this._setWrapMode(this._wrapMode, !0);
                    this._setReadOnly(this._readonly);
                    this._setThemeClass(this._themeClass, !0);
                    this._setTabSize(this._tabSize, !0);
                    this._hookEvents();
                    b = this._rulers;
                    for (c = 0; c < b.length; c++) this._createRuler(b[c]);
                    this._update()
                }
            },
            _defaultOptions: function () {
                return {
                    parent: {
                        value: void 0,
                        update: null
                    },
                    model: {
                        value: void 0,
                        update: this.setModel
                    },
                    scrollAnimation: {
                        value: 0,
                        update: null
                    },
                    readonly: {
                        value: !1,
                        update: this._setReadOnly
                    },
                    fullSelection: {
                        value: !0,
                        update: this._setFullSelection
                    },
                    tabMode: {
                        value: !0,
                        update: null
                    },
                    tabSize: {
                        value: 8,
                        update: this._setTabSize
                    },
                    expandTab: {
                        value: !1,
                        update: null
                    },
                    overwriteMode: {
                        value: !1,
                        update: this._setOverwriteMode
                    },
                    blockCursorVisible: {
                        value: !1,
                        update: this._setBlockCursor
                    },
                    wrapMode: {
                        value: !1,
                        update: this._setWrapMode
                    },
                    wrappable: {
                        value: !1,
                        update: null
                    },
                    theme: {
                        value: b.TextTheme.getTheme(),
                        update: this._setTheme
                    },
                    themeClass: {
                        value: void 0,
                        update: this._setThemeClass
                    }
                }
            },
            _destroyRuler: function (a) {
                var c = a.getLocation() === "left" ? this._leftDiv : this._rightDiv;
                if (c)
                    for (var b = c.firstChild; b;) {
                        if (b._ruler === a) {
                            b._ruler = void 0;
                            c.removeChild(b);
                            if (c.children.length === 0) c.style.display = "none";
                            break
                        }
                        b = b.nextSibling
                    }
            },
            _destroyView: function () {
                if (this._clientDiv) {
                    this._setGrab(null);
                    this._unhookEvents();
                    var a = this._getWindow();
                    if (this._autoScrollTimerID) a.clearTimeout(this._autoScrollTimerID),
                        this._autoScrollTimerID = null;
                    if (this._updateTimer) a.clearTimeout(this._updateTimer),
                        this._updateTimer = null;
                    a = this._rootDiv;
                    a.parentNode.removeChild(a);
                    this._hScrollDiv = this._vScrollDiv = this._rightDiv = this._leftDiv = this._overlayDiv = this._clientDiv = this._clipScrollDiv = this._clipDiv = this._viewDiv = this._scrollDiv = this._rootDiv = this._clipboardDiv = this._selDiv3 = this._selDiv2 = this._selDiv1 = null
                }
            },
            _doAutoScroll: function (a, c, b) {
                this._autoScrollDir = a;
                this._autoScrollX = c;
                this._autoScrollY = b;
                this._autoScrollTimerID || this._autoScrollTimer()
            },
            _endAutoScroll: function () {
                this._autoScrollTimerID && this._getWindow().clearTimeout(this._autoScrollTimerID);
                this._autoScrollTimerID = this._autoScrollDir = void 0
            },
            _fixCaret: function () {
                var a = this._clientDiv;
                if (a) {
                    var c = this._hasFocus;
                    this._ignoreFocus = !0;
                    c && a.blur();
                    a.contentEditable = !1;
                    a.contentEditable = !0;
                    c && a.focus();
                    this._ignoreFocus = !1
                }
            },
            _getBaseText: function (a, c) {
                var b = this._model;
                b.getBaseModel && (a = b.mapOffset(a), c = b.mapOffset(c), b = b.getBaseModel());
                return b.getText(a, c)
            },
            _getBottomIndex: function (a) {
                var c = this._bottomChild;
                if (a && this._getClientHeight() > this._getLineHeight()) {
                    var a = c.getBoundingClientRect(),
                        b = this._clientDiv.getBoundingClientRect();
                    a.bottom > b.bottom && (c = this._getLinePrevious(c) || c)
                }
                return c.lineIndex
            },
            _getBoundsAtOffset: function (a) {
                var c = this._getLine(this._model.getLineAtOffset(a)),
                    a = c.getBoundingClientRect(a),
                    b = this._getLinePixel(c.lineIndex);
                a.top += b;
                a.bottom += b;
                c.destroy();
                return a
            },
            _getClientHeight: function () {
                var a = this._getViewPadding();
                return Math.max(0, this._viewDiv.clientHeight - a.top - a.bottom)
            },
            _getClientWidth: function () {
                var a = this._getViewPadding();
                return Math.max(0, this._viewDiv.clientWidth - a.left - a.right)
            },
            _getClipboardText: function (a, c) {
                var b = this._model.getLineDelimiter(),
                    f,
                    m,
                    n = this._getWindow();
                if (n.clipboardData) return f = [],
                    m = n.clipboardData.getData("Text"),
                    i(m,
                        function (a) {
                            f.push(a)
                        },
                        function () {
                            f.push(b)
                        }),
                    m = f.join(""),
                    c && c(m),
                    m;
                if (d.isFirefox) {
                    this._ignoreFocus = !0;
                    var j = this._clipboardDiv;
                    j.innerHTML = "<pre contenteditable=''></pre>";
                    j.firstChild.focus();
                    var e = this,
                        h = function () {
                            var a = e._getTextFromElement(j);
                            j.innerHTML = "";
                            f = [];
                            i(a,
                                function (a) {
                                    f.push(a)
                                },
                                function () {
                                    f.push(b)
                                });
                            return f.join("")
                        },
                        k = !1;
                    this._ignorePaste = !0;
                    if (!d.isLinux || this._lastMouseButton !== 2) try {
                        k = j.ownerDocument.execCommand("paste", !1, null)
                    } catch (q) {
                        k = j.childNodes.length > 1 || j.firstChild && j.firstChild.childNodes.length > 0
                    }
                    this._ignorePaste = !1;
                    if (!k) return a ? (n.setTimeout(function () {
                        e.focus();
                        (m = h()) && c && c(m);
                        e._ignoreFocus = !1
                    },
                        0), null) : (this.focus(), this._ignoreFocus = !1, "");
                    this.focus();
                    this._ignoreFocus = !1;
                    (m = h()) && c && c(m);
                    return m
                }
                return a && a.clipboardData ? (f = [], m = a.clipboardData.getData("text/plain"), i(m,
                    function (a) {
                        f.push(a)
                    },
                    function () {
                        f.push(b)
                    }), (m = f.join("")) && c && c(m), m) : ""
            },
            _getDOMText: function (a, c) {
                for (var b = a.firstChild,
                    d = "",
                    i = 0; b;) {
                    var f;
                    if (!b.ignore)
                        if (b.ignoreChars) {
                            f = b.lastChild;
                            for (var m = 0,
                                n = [], j = -1; f;) {
                                for (var e = f.data,
                                    h = e.length - 1; h >= 0; h--) {
                                    var k = e.substring(h, h + 1);
                                    m < b.ignoreChars && (k === " " || k === "\u200c" || k === "\ufeff") ? m++ : n.push(k === "\u00a0" ? "\t" : k)
                                }
                                if (c === f) j = n.length;
                                f = f.previousSibling
                            }
                            n = n.reverse().join("");
                            j !== -1 && (i = d.length + n.length - j);
                            d += n
                        } else
                            for (f = b.firstChild; f;) {
                                if (c === f) i = d.length;
                                d += f.data;
                                f = f.nextSibling
                            }
                    b = b.nextSibling
                }
                return {
                    text: d,
                    offset: i
                }
            },
            _getTextFromElement: function (a) {
                var c = a.ownerDocument,
                    b = c.defaultView;
                if (!b.getSelection) return a.innerText || a.textContent;
                c = c.createRange();
                c.selectNode(a);
                var a = b.getSelection(),
                    b = [],
                    d;
                for (d = 0; d < a.rangeCount; d++) b.push(a.getRangeAt(d));
                this._ignoreSelect = !0;
                a.removeAllRanges();
                a.addRange(c);
                c = a.toString();
                a.removeAllRanges();
                for (d = 0; d < b.length; d++) a.addRange(b[d]);
                this._ignoreSelect = !1;
                return c
            },
            _getViewPadding: function () {
                return this._metrics.viewPadding
            },
            _getLine: function (a) {
                var c = this._getLineNode(a);
                return c && !c.lineChanged && !c.lineRemoved ? c._line : new r(this, a)
            },
            _getLineHeight: function (a, c) {
                if (a !== void 0 && this._lineHeight) {
                    var b = this._lineHeight[a];
                    if (b) return b;
                    if (c || c === void 0) return this._lineHeight[a] = this._calculateLineHeight(a)
                }
                return this._metrics.lineHeight
            },
            _getLineNode: function (a) {
                for (var c = this._clientDiv.firstChild; c;) {
                    if (a === c.lineIndex) return c;
                    c = c.nextSibling
                }
            },
            _getLineNext: function (a) {
                for (a = a ? a.nextSibling : this._clientDiv.firstChild; a && a.lineIndex === -1;) a = a.nextSibling;
                return a
            },
            _getLinePrevious: function (a) {
                for (a = a ? a.previousSibling : this._clientDiv.lastChild; a && a.lineIndex === -1;) a = a.previousSibling;
                return a
            },
            _getLinePixel: function (a) {
                a = Math.min(Math.max(0, a), this._model.getLineCount());
                if (this._lineHeight) {
                    var c = this._getTopIndex(),
                        b = -this._topIndexY + this._getScroll().y;
                    if (a > c)
                        for (; c < a; c++) b += this._getLineHeight(c);
                    else
                        for (c -= 1; c >= a; c--) b -= this._getLineHeight(c);
                    return b
                }
                return this._getLineHeight() * a
            },
            _getLineIndex: function (a) {
                var c, b = 0,
                    d = this._model.getLineCount();
                if (this._lineHeight) {
                    var b = this._getTopIndex(),
                        i = -this._topIndexY + this._getScroll().y;
                    if (a !== i)
                        if (a < i)
                            for (; a < i && b > 0;) a += this._getLineHeight(--b);
                        else
                            for (c = this._getLineHeight(b); a - c >= i && b < d - 1;) a -= c,
                                c = this._getLineHeight(++b)
                } else c = this._getLineHeight(),
                    b = Math.floor(a / c);
                return Math.max(0, Math.min(d - 1, b))
            },
            _getScroll: function (a) {
                (a === void 0 || a) && this._cancelAnimation();
                a = this._viewDiv;
                return {
                    x: a.scrollLeft,
                    y: a.scrollTop
                }
            },
            _getSelection: function () {
                return this._selection.clone()
            },
            _getTopIndex: function (a) {
                var c = this._topChild;
                if (a && this._getClientHeight() > this._getLineHeight()) {
                    var a = c.getBoundingClientRect(),
                        b = this._getViewPadding(),
                        d = this._viewDiv.getBoundingClientRect();
                    a.top < d.top + b.top && (c = this._getLineNext(c) || c)
                }
                return c.lineIndex
            },
            _hookEvents: function () {
                var a = this;
                this._modelListener = {
                    onChanging: function (c) {
                        a._onModelChanging(c)
                    },
                    onChanged: function (c) {
                        a._onModelChanged(c)
                    }
                };
                this._model.addEventListener("preChanging", this._modelListener.onChanging);
                this._model.addEventListener("postChanged", this._modelListener.onChanged);
                this._themeListener = {
                    onChanged: function () {
                        a._setThemeClass(a._themeClass)
                    }
                };
                this._theme.addEventListener("ThemeChanged", this._themeListener.onChanged);
                var c = this._handlers = [],
                    b = this._clientDiv,
                    i = this._viewDiv,
                    f = this._rootDiv,
                    m = this._overlayDiv || b,
                    n = b.ownerDocument,
                    j = this._getWindow(),
                    e = d.isIE ? n : j;
                c.push({
                    target: j,
                    type: "resize",
                    handler: function (c) {
                        return a._handleResize(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "blur",
                    handler: function (c) {
                        return a._handleBlur(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "focus",
                    handler: function (c) {
                        return a._handleFocus(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "focus",
                    handler: function () {
                        b.focus()
                    }
                });
                c.push({
                    target: i,
                    type: "scroll",
                    handler: function (c) {
                        return a._handleScroll(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "textInput",
                    handler: function (c) {
                        return a._handleTextInput(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "keydown",
                    handler: function (c) {
                        return a._handleKeyDown(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "keypress",
                    handler: function (c) {
                        return a._handleKeyPress(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "keyup",
                    handler: function (c) {
                        return a._handleKeyUp(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "contextmenu",
                    handler: function (c) {
                        return a._handleContextMenu(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "copy",
                    handler: function (c) {
                        return a._handleCopy(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "cut",
                    handler: function (c) {
                        return a._handleCut(c ? c : j.event)
                    }
                });
                c.push({
                    target: b,
                    type: "paste",
                    handler: function (c) {
                        return a._handlePaste(c ? c : j.event)
                    }
                });
                if (d.isIOS || d.isAndroid) c.push({
                    target: n,
                    type: "selectionchange",
                    handler: function (c) {
                        return a._handleSelectionChange(c ? c : j.event)
                    }
                }),
                    c.push({
                        target: b,
                        type: "touchstart",
                        handler: function (c) {
                            return a._handleTouchStart(c ? c : j.event)
                        }
                    }),
                    c.push({
                        target: b,
                        type: "touchmove",
                        handler: function (c) {
                            return a._handleTouchMove(c ? c : j.event)
                        }
                    }),
                    c.push({
                        target: b,
                        type: "touchend",
                        handler: function (c) {
                            return a._handleTouchEnd(c ? c : j.event)
                        }
                    });
                else {
                    c.push({
                        target: b,
                        type: "selectstart",
                        handler: function (c) {
                            return a._handleSelectStart(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: b,
                        type: "mousedown",
                        handler: function (c) {
                            return a._handleMouseDown(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: b,
                        type: "mouseover",
                        handler: function (c) {
                            return a._handleMouseOver(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: b,
                        type: "mouseout",
                        handler: function (c) {
                            return a._handleMouseOut(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: e,
                        type: "mouseup",
                        handler: function (c) {
                            return a._handleMouseUp(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: e,
                        type: "mousemove",
                        handler: function (c) {
                            return a._handleMouseMove(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: f,
                        type: "mousedown",
                        handler: function (c) {
                            return a._handleRootMouseDown(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: f,
                        type: "mouseup",
                        handler: function (c) {
                            return a._handleRootMouseUp(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "dragstart",
                        handler: function (c) {
                            return a._handleDragStart(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "drag",
                        handler: function (c) {
                            return a._handleDrag(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "dragend",
                        handler: function (c) {
                            return a._handleDragEnd(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "dragenter",
                        handler: function (c) {
                            return a._handleDragEnter(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "dragover",
                        handler: function (c) {
                            return a._handleDragOver(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "dragleave",
                        handler: function (c) {
                            return a._handleDragLeave(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: m,
                        type: "drop",
                        handler: function (c) {
                            return a._handleDrop(c ? c : j.event)
                        }
                    });
                    c.push({
                        target: this._clientDiv,
                        type: d.isFirefox ? "DOMMouseScroll" : "mousewheel",
                        handler: function (c) {
                            return a._handleMouseWheel(c ? c : j.event)
                        }
                    });
                    if (d.isFirefox && (!d.isWindows || d.isFirefox >= 15)) (i = j.MutationObserver || j.MozMutationObserver) ? (this._mutationObserver = new i(function (c) {
                        a._handleDataModified(c)
                    }), this._mutationObserver.observe(b, {
                        subtree: !0,
                        characterData: !0
                    })) : c.push({
                        target: this._clientDiv,
                        type: "DOMCharacterDataModified",
                        handler: function (c) {
                            return a._handleDataModified(c ? c : j.event)
                        }
                    });
                    this._overlayDiv && (c.push({
                        target: this._overlayDiv,
                        type: "mousedown",
                        handler: function (c) {
                            return a._handleMouseDown(c ? c : j.event)
                        }
                    }), c.push({
                        target: this._overlayDiv,
                        type: "mouseover",
                        handler: function (c) {
                            return a._handleMouseOver(c ? c : j.event)
                        }
                    }), c.push({
                        target: this._overlayDiv,
                        type: "mouseout",
                        handler: function (c) {
                            return a._handleMouseOut(c ? c : j.event)
                        }
                    }), c.push({
                        target: this._overlayDiv,
                        type: "contextmenu",
                        handler: function (c) {
                            return a._handleContextMenu(c ? c : j.event)
                        }
                    }));
                    this._isW3CEvents || c.push({
                        target: this._clientDiv,
                        type: "dblclick",
                        handler: function (c) {
                            return a._handleDblclick(c ? c : j.event)
                        }
                    })
                }
                i = this._leftDiv;
                f = this._rightDiv;
                d.isIE && c.push({
                    target: i,
                    type: "selectstart",
                    handler: function () {
                        return !1
                    }
                });
                c.push({
                    target: i,
                    type: d.isFirefox ? "DOMMouseScroll" : "mousewheel",
                    handler: function (c) {
                        return a._handleMouseWheel(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "click",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "dblclick",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "mousemove",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "mouseover",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: i,
                    type: "mouseout",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                d.isIE && c.push({
                    target: f,
                    type: "selectstart",
                    handler: function () {
                        return !1
                    }
                });
                c.push({
                    target: f,
                    type: d.isFirefox ? "DOMMouseScroll" : "mousewheel",
                    handler: function (c) {
                        return a._handleMouseWheel(c ? c : j.event)
                    }
                });
                c.push({
                    target: f,
                    type: "click",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: f,
                    type: "dblclick",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: f,
                    type: "mousemove",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: f,
                    type: "mouseover",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                c.push({
                    target: f,
                    type: "mouseout",
                    handler: function (c) {
                        a._handleRulerEvent(c ? c : j.event)
                    }
                });
                for (i = 0; i < c.length; i++) f = c[i],
                    h(f.target, f.type, f.handler, f.capture)
            },
            _getWindow: function () {
                return this._parent.ownerDocument.defaultView || this._parent.ownerDocument.parentWindow
            },
            _ignoreEvent: function (a) {
                for (a = a.target; a && a !== this._clientDiv;) {
                    if (a.ignore) return !0;
                    a = a.parentNode
                }
                return !1
            },
            _init: function (a) {
                var c = a.parent;
                typeof c === "string" && (c = (a.document || document).getElementById(c));
                if (!c) throw "no parent";
                a.parent = c;
                a.model = a.model || new p.TextModel;
                var b = this._defaultOptions(),
                    i;
                for (i in b) b.hasOwnProperty(i) && (this["_" + i] = a[i] !== void 0 ? a[i] : b[i].value);
                this._keyModes = [];
                this._rulers = [];
                this._selection = new j(0, 0, !1);
                this._linksVisible = !1;
                this._maxLineWidth = this._redrawCount = 0;
                this._maxLineIndex = -1;
                this._ignoreSelect = !0;
                this._hasFocus = this._ignoreFocus = !1;
                this._dragOffset = this._columnX = -1;
                this._isRangeRects = (!d.isIE || d.isIE >= 9) && typeof c.ownerDocument.createRange().getBoundingClientRect === "function";
                this._isW3CEvents = c.addEventListener;
                this._autoScrollTimerID = this._autoScrollY = this._autoScrollX = null;
                this._AUTO_SCROLL_RATE = 50;
                this._mouseUpClosure = this._moseMoveClosure = this._grabControl = null;
                this._clickCount = this._lastMouseTime = this._lastMouseY = this._lastMouseX = 0;
                this._clickTime = 250;
                this._clickDist = 5;
                this._isMouseDown = !1;
                this._doubleClickSelection = null;
                this._vScroll = this._hScroll = 0;
                this._imeOffset = -1;
                this._createActions();
                this._createView()
            },
            _modifyContent: function (a, c) {
                if (!this._readonly || a._code)
                    if (a.type = "Verify", this.onVerify(a), !(a.text === null || a.text === void 0)) {
                        var b = this._model;
                        try {
                            if (a._ignoreDOMSelection) this._ignoreDOMSelection = !0;
                            b.setText(a.text, a.start, a.end)
                        } finally {
                            if (a._ignoreDOMSelection) this._ignoreDOMSelection = !1
                        }
                        c && (b = this._getSelection(), b.setCaret(a.start + a.text.length), this._setSelection(b, !0));
                        this.onModify({
                            type: "Modify"
                        })
                    }
            },
            _onModelChanged: function (a) {
                a.type = "ModelChanged";
                this.onModelChanged(a);
                a.type = "Changed";
                var c = a.start,
                    b = a.addedCharCount,
                    d = a.removedCharCount,
                    i = a.addedLineCount,
                    f = a.removedLineCount,
                    m = this._getSelection();
                m.end > c && (m.end > c && m.start < c + d ? m.setCaret(c + b) : (m.start += b - d, m.end += b - d), this._setSelection(m, !1, !1));
                c = this._model.getLineAtOffset(c);
                for (b = this._getLineNext(); b;) {
                    d = b.lineIndex;
                    if (c <= d && d <= c + f) c === d && !b.modelChangedEvent && !b.lineRemoved ? (b.modelChangedEvent = a, b.lineChanged = !0) : (b.lineRemoved = !0, b.lineChanged = !1, b.modelChangedEvent = null);
                    if (d > c + f) b.lineIndex = d + i - f,
                        b._line.lineIndex = b.lineIndex;
                    b = this._getLineNext(b)
                }
                this._lineHeight && (a = [c, f].concat(Array(i)), Array.prototype.splice.apply(this._lineHeight, a));
                if (!this._wrapMode && c <= this._maxLineIndex && this._maxLineIndex <= c + f) this._checkMaxLineIndex = this._maxLineIndex,
                    this._maxLineIndex = -1,
                    this._maxLineWidth = 0;
                this._update()
            },
            _onModelChanging: function (a) {
                a.type = "ModelChanging";
                this.onModelChanging(a);
                a.type = "Changing"
            },
            _queueUpdate: function () {
                if (!this._updateTimer && !this._ignoreQueueUpdate) {
                    var a = this;
                    this._updateTimer = this._getWindow().setTimeout(function () {
                        a._updateTimer = null;
                        a._update()
                    },
                        0)
                }
            },
            _resetLineHeight: function (a, c) {
                if (this._wrapMode || this._variableLineHeight) {
                    if (a !== void 0 && c !== void 0)
                        for (var b = a; b < c; b++) this._lineHeight[b] = void 0;
                    else this._lineHeight = Array(this._model.getLineCount());
                    this._calculateLineHeightTimer()
                } else this._lineHeight = null
            },
            _resetLineWidth: function () {
                var a = this._clientDiv;
                if (a)
                    for (a = a.firstChild; a;) a.lineWidth = void 0,
                        a = a.nextSibling
            },
            _reset: function () {
                this._maxLineIndex = -1;
                this._maxLineWidth = 0;
                this._columnX = -1;
                this._bottomChild = this._topChild = null;
                this._topIndexY = 0;
                this._variableLineHeight = !1;
                this._resetLineHeight();
                this._setSelection(new j(0, 0, !1), !1, !1);
                if (this._viewDiv) this._viewDiv.scrollLeft = 0,
                    this._viewDiv.scrollTop = 0;
                var a = this._clientDiv;
                if (a) {
                    for (var c = a.firstChild; c;) c.lineRemoved = !0,
                        c = c.nextSibling;
                    if (d.isFirefox) this._ignoreFocus = !1,
                        (c = this._hasFocus) && a.blur(),
                        a.contentEditable = !1,
                        a.contentEditable = !0,
                        c && a.focus(),
                        this._ignoreFocus = !1
                }
            },
            _scrollViewAnimated: function (a, c, b) {
                if (b && this._scrollAnimation) {
                    var d = this;
                    this._animation = new v({
                        window: this._getWindow(),
                        duration: this._scrollAnimation,
                        curve: [c, 0],
                        onAnimate: function (a) {
                            a = c - Math.floor(a);
                            d._scrollView(0, a);
                            c -= a
                        },
                        onEnd: function () {
                            d._animation = null;
                            d._scrollView(a, c);
                            b && b()
                        }
                    });
                    this._animation.play()
                } else this._scrollView(a, c),
                    b && b()
            },
            _scrollView: function (a, c) {
                this._ensureCaretVisible = !1;
                var b = this._viewDiv;
                a && (b.scrollLeft += a);
                c && (b.scrollTop += c)
            },
            _setClipboardText: function (a, c) {
                var b, f = this._parent.ownerDocument,
                    m = this._getWindow();
                if (m.clipboardData) return b = [],
                    i(a,
                        function (a) {
                            b.push(a)
                        },
                        function () {
                            b.push(d.platformDelimiter)
                        }),
                    m.clipboardData.setData("Text", b.join(""));
                if (c && c.clipboardData && (b = [], i(a,
                    function (a) {
                        b.push(a)
                    },
                    function () {
                        b.push(d.platformDelimiter)
                    }), c.clipboardData.setData("text/plain", b.join("")))) return !0;
                var j = d.createElement(f, "pre");
                j.style.position = "fixed";
                j.style.left = "-1000px";
                i(a,
                    function (a) {
                        j.appendChild(f.createTextNode(a))
                    },
                    function () {
                        j.appendChild(d.createElement(f, "br"))
                    });
                j.appendChild(f.createTextNode(" "));
                this._clientDiv.appendChild(j);
                var n = f.createRange();
                n.setStart(j.firstChild, 0);
                n.setEndBefore(j.lastChild);
                var e = m.getSelection();
                e.rangeCount > 0 && e.removeAllRanges();
                e.addRange(n);
                var h = this,
                    n = function () {
                        j && j.parentNode === h._clientDiv && h._clientDiv.removeChild(j);
                        h._updateDOMSelection()
                    },
                    e = !1;
                this._ignoreCopy = !0;
                try {
                    e = f.execCommand("copy", !1, null)
                } catch (k) { }
                this._ignoreCopy = !1;
                if (!e && c) return m.setTimeout(n, 0),
                    !1;
                n();
                return !0
            },
            _setDOMSelection: function (a, c, b, i, f) {
                for (var m, j, n, e, h = 0,
                    k = a.firstChild,
                    q, r, l = this._model.getLine(a.lineIndex).length; k;) {
                    if (!k.ignore) {
                        q = k.firstChild;
                        r = q.length;
                        k.ignoreChars && (r -= k.ignoreChars);
                        if (h + r > c || h + r >= l) {
                            m = q;
                            j = c - h;
                            k.ignoreChars && r > 0 && j === r && (j += k.ignoreChars);
                            break
                        }
                        h += r
                    }
                    k = k.nextSibling
                }
                for (var h = 0,
                    k = b.firstChild,
                    o = this._model.getLine(b.lineIndex).length; k;) {
                    if (!k.ignore) {
                        q = k.firstChild;
                        r = q.length;
                        k.ignoreChars && (r -= k.ignoreChars);
                        if (r + h > i || h + r >= o) {
                            n = q;
                            e = i - h;
                            k.ignoreChars && r > 0 && e === r && (e += k.ignoreChars);
                            break
                        }
                        h += r
                    }
                    k = k.nextSibling
                }
                this._setDOMFullSelection(a, c, l, b, i, o);
                a = this._getWindow();
                c = this._parent.ownerDocument;
                if (a.getSelection) {
                    b = a.getSelection();
                    a = c.createRange();
                    a.setStart(m, j);
                    a.setEnd(n, e);
                    if (this._hasFocus && (b.anchorNode !== m || b.anchorOffset !== j || b.focusNode !== n || b.focusOffset !== e || b.anchorNode !== n || b.anchorOffset !== e || b.focusNode !== m || b.focusOffset !== j)) this._ignoreSelect = !1,
                        b.rangeCount > 0 && b.removeAllRanges(),
                        b.addRange(a),
                        this._ignoreSelect = !0;
                    if (this._cursorDiv && (a = c.createRange(), f ? (a.setStart(m, j), a.setEnd(m, j)) : (a.setStart(n, e), a.setEnd(n, e)), n = a.getClientRects()[0], e = this._cursorDiv.parentNode, m = e.getBoundingClientRect(), n && m)) this._cursorDiv.style.top = n.top - m.top + e.scrollTop + "px",
                        this._cursorDiv.style.left = n.left - m.left + e.scrollLeft + "px"
                } else if (c.selection && this._hasFocus) f = c.body,
                    a = d.createElement(c, "div"),
                    f.appendChild(a),
                    f.removeChild(a),
                    a = f.createTextRange(),
                    a.moveToElementText(m.parentNode),
                    a.moveStart("character", j),
                    m = f.createTextRange(),
                    m.moveToElementText(n.parentNode),
                    m.moveStart("character", e),
                    a.setEndPoint("EndToStart", m),
                    this._ignoreSelect = !1,
                    a.select(),
                    this._ignoreSelect = !0
            },
            _setDOMFullSelection: function (a, c, b, d, i) {
                if (this._selDiv1 && (b = this._selDiv1, b.style.width = "0px", b.style.height = "0px", b = this._selDiv2, b.style.width = "0px", b.style.height = "0px", b = this._selDiv3, b.style.width = "0px", b.style.height = "0px", !(a === d && c === i))) {
                    var f = this._model,
                        m = this._getViewPadding(),
                        j = this._clientDiv.getBoundingClientRect(),
                        n = this._viewDiv.getBoundingClientRect(),
                        b = n.left + m.left,
                        e = j.right,
                        m = n.top + m.top,
                        h = j.bottom,
                        n = j = 0;
                    this._clipDiv ? (n = this._clipDiv.getBoundingClientRect(), j = n.left - this._clipDiv.scrollLeft) : (n = this._rootDiv.getBoundingClientRect(), j = n.left);
                    n = n.top;
                    this._ignoreDOMSelection = !0;
                    var a = (new r(this, a.lineIndex, a)).getBoundingClientRect(f.getLineStart(a.lineIndex) + c, !1),
                        k = a.left,
                        i = (new r(this, d.lineIndex, d)).getBoundingClientRect(f.getLineStart(d.lineIndex) + i, !1),
                        c = i.left;
                    this._ignoreDOMSelection = !1;
                    var f = this._selDiv1,
                        k = Math.min(e, Math.max(b, k)),
                        q = Math.min(h, Math.max(m, a.top)),
                        l = e,
                        d = Math.min(h, Math.max(m, a.bottom));
                    f.style.left = k - j + "px";
                    f.style.top = q - n + "px";
                    f.style.width = Math.max(0, l - k) + "px";
                    f.style.height = Math.max(0, d - q) + "px";
                    if (a.top === i.top) l = Math.min(c, e),
                        f.style.width = Math.max(0, l - k) + "px";
                    else if (a = Math.min(h, Math.max(m, i.top)), c = Math.min(e, Math.max(b, c)), m = Math.min(h, Math.max(m, i.bottom)), h = this._selDiv3, h.style.left = b - j + "px", h.style.top = a - n + "px", h.style.width = Math.max(0, c - b) + "px", h.style.height = Math.max(0, m - a) + "px", a - d > 0) m = this._selDiv2,
                        m.style.left = b - j + "px",
                        m.style.top = d - n + "px",
                        m.style.width = Math.max(0, e - b) + "px",
                        m.style.height = Math.max(0, a - d) + "px"
                }
            },
            _setGrab: function (a) {
                if (a !== this._grabControl) a ? (a.setCapture && a.setCapture(), this._grabControl = a) : (this._grabControl.releaseCapture && this._grabControl.releaseCapture(), this._grabControl = null)
            },
            _setLinksVisible: function (a) {
                if (this._linksVisible !== a) {
                    this._linksVisible = a;
                    if (d.isIE && a) this._hadFocus = this._hasFocus;
                    var c = this._clientDiv;
                    c.contentEditable = !a;
                    this._hadFocus && !a && c.focus();
                    if (this._overlayDiv) this._overlayDiv.style.zIndex = a ? "-1" : "1";
                    for (a = this._getLineNext(); a;) {
                        if (a.hasLink)
                            for (c = a.firstChild; c;)
                                if (c.ignore) c = c.nextSibling;
                                else {
                                    var b = c.nextSibling,
                                        i = c.viewStyle;
                                    i && i.tagName && i.tagName.toLowerCase() === "a" && a.replaceChild(a._line._createSpan(a, c.firstChild.data, i), c);
                                    c = b
                                }
                        a = this._getLineNext(a)
                    }
                    this._updateDOMSelection()
                }
            },
            _setSelection: function (a, c, b, d, i) {
                if (a) {
                    this._columnX = -1;
                    b === void 0 && (b = !0);
                    var f = this._selection;
                    this._selection = a;
                    c !== !1 && this._showCaret(!1, d, c, i);
                    b && this._updateDOMSelection();
                    if (!f.equals(a)) this.onSelection({
                        type: "Selection",
                        oldValue: {
                            start: f.start,
                            end: f.end
                        },
                        newValue: {
                            start: a.start,
                            end: a.end
                        }
                    })
                }
            },
            _setSelectionTo: function (a, c, b, d) {
                var i = this._model,
                    f = this._getSelection(),
                    c = this.convert({
                        x: a,
                        y: c
                    },
                        "page", "document"),
                    a = this._getLineIndex(c.y);
                if (this._clickCount === 1) {
                    i = this._getLine(a);
                    a = i.getOffset(c.x, c.y - this._getLinePixel(a));
                    i.destroy();
                    if (d && !b && f.start <= a && a < f.end) return this._dragOffset = a,
                        !1;
                    f.extend(a);
                    b || f.collapse()
                } else (this._clickCount & 1) === 0 ? (i = this._getLine(a), a = i.getOffset(c.x, c.y - this._getLinePixel(a)), this._doubleClickSelection ? a >= this._doubleClickSelection.start ? (b = this._doubleClickSelection.start, d = i.getNextOffset(a, {
                    unit: "wordend",
                    count: 1
                })) : (b = i.getNextOffset(a, {
                    unit: "word",
                    count: -1
                }), d = this._doubleClickSelection.end) : (b = i.getNextOffset(a, {
                    unit: "word",
                    count: -1
                }), d = i.getNextOffset(b, {
                    unit: "wordend",
                    count: 1
                })), i.destroy()) : this._doubleClickSelection ? (d = i.getLineAtOffset(this._doubleClickSelection.start), a >= d ? (b = i.getLineStart(d), d = i.getLineEnd(a)) : (b = i.getLineStart(a), d = i.getLineEnd(d))) : (b = i.getLineStart(a), d = i.getLineEnd(a)),
                    f.setCaret(b),
                    f.extend(d);
                this._setSelection(f, !0, !0);
                return !0
            },
            _setFullSelection: function (a, c) {
                this._fullSelection = a;
                if (d.isWebkit) this._fullSelection = !0;
                var b = this._clipDiv || this._rootDiv;
                if (b)
                    if (this._fullSelection) {
                        if (!this._selDiv1 && this._fullSelection && !d.isIOS) {
                            var i = b.ownerDocument;
                            this._highlightRGB = d.isWebkit ? "transparent" : "Highlight";
                            var f = d.createElement(i, "div");
                            this._selDiv1 = f;
                            f.style.position = "absolute";
                            f.style.borderWidth = "0px";
                            f.style.margin = "0px";
                            f.style.padding = "0px";
                            f.style.outline = "none";
                            f.style.background = this._highlightRGB;
                            f.style.width = "0px";
                            f.style.height = "0px";
                            f.style.zIndex = "0";
                            b.appendChild(f);
                            var m = d.createElement(i, "div");
                            this._selDiv2 = m;
                            m.style.position = "absolute";
                            m.style.borderWidth = "0px";
                            m.style.margin = "0px";
                            m.style.padding = "0px";
                            m.style.outline = "none";
                            m.style.background = this._highlightRGB;
                            m.style.width = "0px";
                            m.style.height = "0px";
                            m.style.zIndex = "0";
                            b.appendChild(m);
                            this._selDiv3 = i = d.createElement(i, "div");
                            i.style.position = "absolute";
                            i.style.borderWidth = "0px";
                            i.style.margin = "0px";
                            i.style.padding = "0px";
                            i.style.outline = "none";
                            i.style.background = this._highlightRGB;
                            i.style.width = "0px";
                            i.style.height = "0px";
                            i.style.zIndex = "0";
                            b.appendChild(i);
                            if (d.isFirefox && d.isMac) {
                                b = this._getWindow().getComputedStyle(i, null).getPropertyValue("background-color");
                                switch (b) {
                                    case "rgb(119, 141, 168)":
                                        b = "rgb(199, 208, 218)";
                                        break;
                                    case "rgb(127, 127, 127)":
                                        b = "rgb(198, 198, 198)";
                                        break;
                                    case "rgb(255, 193, 31)":
                                        b = "rgb(250, 236, 115)";
                                        break;
                                    case "rgb(243, 70, 72)":
                                        b = "rgb(255, 176, 139)";
                                        break;
                                    case "rgb(255, 138, 34)":
                                        b = "rgb(255, 209, 129)";
                                        break;
                                    case "rgb(102, 197, 71)":
                                        b = "rgb(194, 249, 144)";
                                        break;
                                    case "rgb(140, 78, 184)":
                                        b = "rgb(232, 184, 255)";
                                        break;
                                    default:
                                        b = "rgb(180, 213, 255)"
                                }
                                this._highlightRGB = b;
                                f.style.background = b;
                                m.style.background = b;
                                i.style.background = b
                            }
                            c || this._updateDOMSelection()
                        }
                    } else {
                        if (this._selDiv1) b.removeChild(this._selDiv1),
                            this._selDiv1 = null;
                        if (this._selDiv2) b.removeChild(this._selDiv2),
                            this._selDiv2 = null;
                        if (this._selDiv3) b.removeChild(this._selDiv3),
                            this._selDiv3 = null
                    }
            },
            _setBlockCursor: function (a) {
                this._blockCursorVisible = a;
                this._updateBlockCursorVisible()
            },
            _setOverwriteMode: function (a) {
                this._overwriteMode = a;
                this._updateBlockCursorVisible()
            },
            _updateBlockCursorVisible: function () {
                if (this._blockCursorVisible || this._overwriteMode) {
                    if (!this._cursorDiv) {
                        var a = d.createElement(document, "div");
                        a.className = "textviewBlockCursor";
                        this._cursorDiv = a;
                        a.tabIndex = -1;
                        a.style.zIndex = "2";
                        a.style.color = "transparent";
                        a.style.position = "absolute";
                        a.style.pointerEvents = "none";
                        a.innerHTML = "&nbsp;";
                        this._viewDiv.appendChild(a);
                        this._updateDOMSelection()
                    }
                } else if (this._cursorDiv) this._cursorDiv.parentNode.removeChild(this._cursorDiv),
                    this._cursorDiv = null
            },
            _setReadOnly: function (a) {
                this._readonly = a;
                this._clientDiv.setAttribute("aria-readonly", a ? "true" : "false")
            },
            _setTabSize: function (a, c) {
                this._tabSize = a;
                this._customTabSize = void 0;
                var b = this._clientDiv;
                if (d.isOpera) {
                    if (b) b.style.OTabSize = this._tabSize + ""
                } else if (d.isWebkit >= 537.1) {
                    if (b) b.style.tabSize = this._tabSize + ""
                } else if (d.isFirefox >= 4) {
                    if (b) b.style.MozTabSize = this._tabSize + ""
                } else if (this._tabSize !== 8) this._customTabSize = this._tabSize;
                c || (this.redrawLines(), this._resetLineWidth())
            },
            _setTheme: function (a) {
                this._theme && this._theme.removeEventListener("ThemeChanged", this._themeListener.onChanged);
                (this._theme = a) && this._theme.addEventListener("ThemeChanged", this._themeListener.onChanged);
                this._setThemeClass(this._themeClass)
            },
            _setThemeClass: function (a, c) {
                this._themeClass = a;
                var b = "textview",
                    i = this._theme.getThemeClass();
                i && (b += " " + i);
                this._themeClass && i !== this._themeClass && (b += " " + this._themeClass);
                this._rootDiv.className = b;
                this._updateStyle(c)
            },
            _setWrapMode: function (a, c) {
                this._wrapMode = a && this._wrappable;
                var b = this._clientDiv,
                    i = this._viewDiv;
                a ? (b.style.whiteSpace = "pre-wrap", b.style.wordWrap = "break-word", i.style.overflowX = "hidden", i.style.overflowY = "scroll") : (b.style.whiteSpace = "pre", b.style.wordWrap = "normal", i.style.overflowX = "auto", i.style.overflowY = "auto");
                c || (this.redraw(), this._resetLineWidth());
                this._resetLineHeight()
            },
            _showCaret: function (a, c, b, i) {
                if (this._clientDiv) {
                    var d = this._model,
                        f = this._getSelection(),
                        m = this._getScroll(),
                        j = f.getCaret(),
                        n = f.start,
                        e = f.end,
                        h = d.getLineAtOffset(e),
                        k = Math.max(Math.max(n, d.getLineStart(h)), e - 1),
                        d = this._getClientWidth(),
                        h = this._getClientHeight(),
                        q = d / 4,
                        r = this._getBoundsAtOffset(j === n ? n : k),
                        l = r.left,
                        o = r.right,
                        t = r.top,
                        p = r.bottom;
                    a && !f.isEmpty() && (r = this._getBoundsAtOffset(j === e ? n : k), r.top === t ? j === n ? o = l + Math.min(r.right - l, d) : l = o - Math.min(o - r.left, d) : j === n ? p = t + Math.min(r.bottom - t, h) : t = p - Math.min(p - r.top, h));
                    a = 0;
                    l < m.x && (a = Math.min(l - m.x, -q));
                    o > m.x + d && (a = Math.max(o - m.x - d, q));
                    f = 0;
                    t < m.y ? f = t - m.y : p > m.y + h && (f = p - m.y - h);
                    i && (i > 0 ? f > 0 && (f = Math.max(f, i)) : f < 0 && (f = Math.min(f, i)));
                    if (a !== 0 || f !== 0) return f !== 0 && typeof b === "number" && (b < 0 && (b = 0), b > 1 && (b = 1), f += Math.floor(f > 0 ? b * h : -b * h)),
                        this._scrollViewAnimated(a, f, c),
                        h !== this._getClientHeight() || d !== this._getClientWidth() ? this._showCaret() : this._ensureCaretVisible = !0,
                        !0;
                    else c && c();
                    return !1
                }
            },
            _startIME: function () {
                if (this._imeOffset === -1) {
                    var a = this._getSelection();
                    a.isEmpty() || this._modifyContent({
                        text: "",
                        start: a.start,
                        end: a.end
                    },
                        !0);
                    this._imeOffset = a.start
                }
            },
            _unhookEvents: function () {
                this._model.removeEventListener("preChanging", this._modelListener.onChanging);
                this._model.removeEventListener("postChanged", this._modelListener.onChanged);
                this._theme.removeEventListener("ThemeChanged", this._themeListener.onChanged);
                this._modelListener = null;
                for (var a = 0; a < this._handlers.length; a++) {
                    var c = this._handlers[a],
                        b = c.target,
                        i = c.type,
                        c = c.handler;
                    typeof b.removeEventListener === "function" ? b.removeEventListener(i, c, !1) : b.detachEvent("on" + i, c)
                }
                this._handlers = null;
                if (this._mutationObserver) this._mutationObserver.disconnect(),
                    this._mutationObserver = null
            },
            _updateDOMSelection: function () {
                if (!this._ignoreDOMSelection && this._clientDiv) {
                    var a = this._getSelection(),
                        c = this._model,
                        b = c.getLineAtOffset(a.start),
                        i = c.getLineAtOffset(a.end),
                        d = this._getLineNext();
                    if (d) {
                        var f = this._getLinePrevious(),
                            m;
                        b < d.lineIndex ? (m = d, b = 0) : b > f.lineIndex ? (m = f, b = 0) : (m = this._getLineNode(b), b = a.start - c.getLineStart(b));
                        i < d.lineIndex ? c = 0 : i > f.lineIndex ? (d = f, c = 0) : (d = this._getLineNode(i), c = a.end - c.getLineStart(i));
                        this._setDOMSelection(m, b, d, c, a.caret)
                    }
                }
            },
            _update: function (a) {
                if (!(this._redrawCount > 0)) {
                    if (this._updateTimer) this._getWindow().clearTimeout(this._updateTimer),
                        this._updateTimer = null,
                        a = !1;
                    var c = this._clientDiv;
                    if (c) {
                        if (this._metrics.invalid) this._ignoreQueueUpdate = !0,
                            this._updateStyle(),
                            this._ignoreQueueUpdate = !1;
                        var b = this._model,
                            i = this._getScroll(!1),
                            f = this._getViewPadding(),
                            m = b.getLineCount(),
                            j = this._getLineHeight(),
                            n = this._getClientWidth();
                        if (this._wrapMode) c.style.width = n + "px";
                        var e, h, k, q, l = 0,
                            o = 0;
                        if (this._lineHeight) {
                            for (; o < m;) {
                                h = this._getLineHeight(o);
                                if (l + h > i.y) break;
                                l += h;
                                o++
                            }
                            e = o;
                            h = Math.max(0, e - 1);
                            k = b = i.y - l;
                            e > 0 && (b += this._getLineHeight(e - 1))
                        } else q = Math.max(0, i.y) / j,
                            e = Math.floor(q),
                            h = Math.max(0, e - 1),
                            b = Math.round((q - h) * j),
                            k = Math.round((q - e) * j);
                        this._topIndexY = k;
                        q = this._parent;
                        var t = q.clientWidth,
                            p = q.clientHeight;
                        q = this._getClientHeight();
                        if (a) {
                            j = 0;
                            this._leftDiv && (e = this._leftDiv.getBoundingClientRect(), j = e.right - e.left);
                            e = n;
                            for (this._wrapMode || (e = Math.max(this._maxLineWidth, e)); o < m;) h = this._getLineHeight(o, !1),
                                l += h,
                                o++;
                            m = l
                        } else {
                            n = this._viewDiv;
                            k = Math.min(e + Math.floor((q + k) / j), m - 1);
                            for (var i = Math.min(k + 1, m - 1), v, w = c.firstChild; w;) {
                                v = w.lineIndex;
                                var y = w.nextSibling;
                                if (!(h <= v && v <= i) || w.lineRemoved || w.lineIndex === -1) this._mouseWheelLine === w ? (w.style.display = "none", w.lineIndex = -1) : c.removeChild(w);
                                w = y
                            }
                            var w = this._getLineNext(),
                                y = n.ownerDocument,
                                A = y.createDocumentFragment();
                            for (v = h; v <= i; v++)
                                if (!w || w.lineIndex > v) (new r(this, v)).create(A, null);
                                else {
                                    A.firstChild && (c.insertBefore(A, w), A = y.createDocumentFragment());
                                    if (w && w.lineChanged) w = (new r(this, v)).create(A, w),
                                        w.lineChanged = !1;
                                    w = this._getLineNext(w)
                                }
                            A.firstChild && c.insertBefore(A, w);
                            if (d.isWebkit && !this._wrapMode) c.style.width = "0x7fffffffpx";
                            w = this._getLineNext();
                            v = q + b;
                            for (A = !1; w;) {
                                h = w.lineWidth;
                                if (h === void 0)
                                    if (y = w._line.getBoundingClientRect(), h = w.lineWidth = Math.ceil(y.right - y.left), y = y.bottom - y.top, this._lineHeight) this._lineHeight[w.lineIndex] = y;
                                    else if (j !== 0 && y !== 0 && Math.ceil(j) !== Math.ceil(y)) this._variableLineHeight = !0,
                                        this._lineHeight = [],
                                        this._lineHeight[w.lineIndex] = y;
                                if (this._lineHeight && !A && (v -= this._lineHeight[w.lineIndex], v < 0)) k = w.lineIndex,
                                    A = !0;
                                if (!this._wrapMode) {
                                    if (h >= this._maxLineWidth) this._maxLineWidth = h,
                                        this._maxLineIndex = w.lineIndex;
                                    if (this._checkMaxLineIndex === w.lineIndex) this._checkMaxLineIndex = -1
                                }
                                if (w.lineIndex === e) this._topChild = w;
                                if (w.lineIndex === k) this._bottomChild = w;
                                w = this._getLineNext(w)
                            }
                            if (this._checkMaxLineIndex !== -1 && (v = this._checkMaxLineIndex, this._checkMaxLineIndex = -1, 0 <= v && v < m)) {
                                j = new r(this, v);
                                y = j.getBoundingClientRect();
                                h = y.right - y.left;
                                if (h >= this._maxLineWidth) this._maxLineWidth = h,
                                    this._maxLineIndex = v;
                                j.destroy()
                            }
                            for (; o < m;) h = this._getLineHeight(o, o <= k),
                                l += h,
                                o++;
                            m = l;
                            this._updateRuler(this._leftDiv, e, i, p);
                            this._updateRuler(this._rightDiv, e, i, p);
                            j = 0;
                            this._leftDiv && (e = this._leftDiv.getBoundingClientRect(), j = e.right - e.left);
                            i = 0;
                            this._rightDiv && (i = this._rightDiv.getBoundingClientRect(), i = i.right - i.left);
                            n.style.left = j + "px";
                            n.style.right = i + "px";
                            i = this._scrollDiv;
                            i.style.height = m + "px";
                            l = n = this._getClientWidth();
                            this._wrapMode || (l = Math.max(this._maxLineWidth, l));
                            e = l;
                            if ((!d.isIE || d.isIE >= 9) && this._maxLineWidth > n) l += f.right + f.left;
                            i.style.width = l + "px";
                            if (this._clipScrollDiv) this._clipScrollDiv.style.width = l + "px";
                            i = this._getScroll(!1)
                        }
                        if (this._vScrollDiv) l = q - 8,
                            o = Math.max(15, Math.ceil(Math.min(1, l / (m + f.top + f.bottom)) * l)),
                            this._vScrollDiv.style.left = j + n - 8 + "px",
                            this._vScrollDiv.style.top = Math.floor(Math.max(0, i.y * l / m)) + "px",
                            this._vScrollDiv.style.height = o + "px";
                        if (!this._wrapMode && this._hScrollDiv) l = n - 8,
                            o = Math.max(15, Math.ceil(Math.min(1, l / (this._maxLineWidth + f.left + f.right)) * l)),
                            this._hScrollDiv.style.left = j + Math.floor(Math.max(0, Math.floor(i.x * l / this._maxLineWidth))) + "px",
                            this._hScrollDiv.style.top = q - 9 + "px",
                            this._hScrollDiv.style.width = o + "px";
                        w = i.x;
                        h = this._clipDiv;
                        l = this._overlayDiv;
                        if (h) {
                            h.scrollLeft = w;
                            h.scrollTop = 0;
                            o = j + f.left;
                            k = f.top;
                            a = n;
                            j = q;
                            w = 0;
                            v = -b;
                            if (i.x === 0) o -= f.left,
                                a += f.left,
                                w = f.left;
                            i.x + n === e && (a += f.right);
                            i.y === 0 && (k -= f.top, j += f.top, v += f.top);
                            i.y + q === m && (j += f.bottom);
                            h.style.left = o + "px";
                            h.style.top = k + "px";
                            h.style.right = t - a - o + "px";
                            h.style.bottom = "0px";//p - j - k + "px";
                            c.style.left = w + "px";
                            c.style.top = v + "px";
                            c.style.width = e + "px";
                            c.style.height = q + b + "px";
                            if (l) l.style.left = c.style.left,
                                l.style.top = c.style.top,
                                l.style.width = c.style.width,
                                l.style.height = c.style.height
                        } else {
                            o = w;
                            k = b;
                            t = w + n;
                            p = b + q;
                            o === 0 && (o -= f.left);
                            k === 0 && (k -= f.top);
                            t === e && (t += f.right);
                            i.y + q === m && (p += f.bottom);
                            c.style.clip = "rect(" + k + "px," + t + "px," + p + "px," + o + "px)";
                            c.style.left = -w + j + f.left + "px";
                            c.style.width = (d.isWebkit ? e : n + w) + "px";
                            if (!a) c.style.top = -b + f.top + "px",
                                c.style.height = q + b + "px";
                            if (l && (l.style.clip = c.style.clip, l.style.left = c.style.left, l.style.width = c.style.width, !a)) l.style.top = c.style.top,
                                l.style.height = c.style.height
                        }
                        this._updateDOMSelection();
                        c = this._ensureCaretVisible;
                        this._ensureCaretVisible = !1;
                        q !== this._getClientHeight() && (this._update(), c && this._showCaret())
                    }
                }
            },
            _updateRuler: function (a, c, b, i) {
                if (a)
                    for (var f = this._parent.ownerDocument,
                        m = this._getLineHeight(), j = this._getViewPadding(), a = a.firstChild; a;) {
                        var n = a._ruler,
                            e = m,
                            h = n.getOverview();
                        h === "page" && (e += this._topIndexY);
                        a.style.top = -e + "px";
                        a.style.height = i + e + "px";
                        a.rulerChanged && k(n.getRulerStyle(), a);
                        var q, r = a.firstChild;
                        r ? (q = r, r = r.nextSibling) : (q = d.createElement(f, "div"), q.style.visibility = "hidden", a.appendChild(q));
                        var l;
                        if (a.rulerChanged && q) {
                            e = -1;
                            if (l = n.getWidestAnnotation())
                                if (k(l.style, q), l.html) q.innerHTML = l.html;
                            q.lineIndex = e;
                            q.style.height = m + j.top + "px"
                        }
                        var o;
                        if (h === "page") {
                            for (n = n.getAnnotations(c, b + 1); r;) e = r.lineIndex,
                                l = r.nextSibling,
                                (!(c <= e && e <= b) || r.lineChanged) && a.removeChild(r),
                                r = l;
                            r = a.firstChild.nextSibling;
                            o = f.createDocumentFragment();
                            for (e = c; e <= b; e++)
                                if (!r || r.lineIndex > e) {
                                    q = d.createElement(f, "div");
                                    if (l = n[e]) {
                                        k(l.style, q);
                                        if (l.html) q.innerHTML = l.html;
                                        q.annotation = l
                                    }
                                    q.lineIndex = e;
                                    q.style.height = this._getLineHeight(e) + "px";
                                    o.appendChild(q)
                                } else if (o.firstChild && (a.insertBefore(o, r), o = f.createDocumentFragment()), r) r = r.nextSibling;
                            o.firstChild && a.insertBefore(o, r)
                        } else {
                            l = this._getClientHeight();
                            e = this._model.getLineCount();
                            r = l + j.top + j.bottom - 2 * this._metrics.scrollWidth;
                            h = m * e < r ? m : r / e;
                            if (a.rulerChanged) {
                                for (l = a.childNodes.length; l > 1;) a.removeChild(a.lastChild),
                                    l--;
                                n = n.getAnnotations(0, e);
                                o = f.createDocumentFragment();
                                for (var t in n)
                                    if (e = t >>> 0, !(e < 0)) {
                                        q = d.createElement(f, "div");
                                        l = n[t];
                                        k(l.style, q);
                                        q.style.position = "absolute";
                                        q.style.top = this._metrics.scrollWidth + m + Math.floor(e * h) + "px";
                                        if (l.html) q.innerHTML = l.html;
                                        q.annotation = l;
                                        q.lineIndex = e;
                                        o.appendChild(q)
                                    }
                                a.appendChild(o)
                            } else if (a._oldTrackHeight !== r)
                                for (q = a.firstChild ? a.firstChild.nextSibling : null; q;) q.style.top = this._metrics.scrollWidth + m + Math.floor(q.lineIndex * h) + "px",
                                    q = q.nextSibling;
                            a._oldTrackHeight = r
                        }
                        a.rulerChanged = !1;
                        a = a.nextSibling
                    }
            },
            _updateStyleSheet: function () {
                var a = "";
                d.isWebkit && this._metrics.scrollWidth > 0 && (a += "\n.textview ::-webkit-scrollbar-corner {background: #eeeeee;}");
                d.isFirefox && d.isMac && this._highlightRGB && this._highlightRGB !== "Highlight" && (a += "\n.textview ::-moz-selection {background: " + this._highlightRGB + ";}");
                if (a) {
                    var c = document.getElementById("_textviewStyle");
                    if (c) c.removeChild(c.firstChild),
                        c.appendChild(document.createTextNode(a));
                    else {
                        c = d.createElement(document, "style");
                        c.id = "_textviewStyle";
                        var b = document.getElementsByTagName("head")[0] || document.documentElement;
                        c.appendChild(document.createTextNode(a));
                        b.insertBefore(c, b.firstChild)
                    }
                }
            },
            _updateStyle: function (a) {
                if (!a && d.isIE) this._rootDiv.style.lineHeight = "normal";
                var c = this._metrics = this._calculateMetrics();
                this._rootDiv.style.lineHeight = d.isIE ? c.lineHeight - (c.lineTrim.top + c.lineTrim.bottom) + "px" : "normal";
                this._updateStyleSheet();
                a || (this.redraw(), this._resetLineWidth())
            }
        };
        e.EventTarget.addMixin(_TextView.prototype);
        return {
            TextView: _TextView
        }
    });
define("orion/editor/projectionTextModel", ["orion/editor/textModel", "orion/editor/eventTarget"],
    function (l, p) {
        function o(e) {
            this._model = e;
            this._projections = []
        }
        o.prototype = {
            addProjection: function (e) {
                if (e) {
                    var b = this._model,
                        d = this._projections;
                    e._lineIndex = b.getLineAtOffset(e.start);
                    e._lineCount = b.getLineAtOffset(e.end) - e._lineIndex;
                    var h = e.text;
                    h || (h = "");
                    e._model = typeof h === "string" ? new l.TextModel(h, b.getLineDelimiter()) : h;
                    var b = this.mapOffset(e.start, !0),
                        h = e.end - e.start,
                        k = e._lineCount,
                        f = e._model.getCharCount(),
                        a = e._model.getLineCount() - 1;
                    this.onChanging({
                        type: "Changing",
                        text: e._model.getText(),
                        start: b,
                        removedCharCount: h,
                        addedCharCount: f,
                        removedLineCount: k,
                        addedLineCount: a
                    });
                    var c = this._binarySearch(d, e.start);
                    d.splice(c, 0, e);
                    this.onChanged({
                        type: "Changed",
                        start: b,
                        removedCharCount: h,
                        addedCharCount: f,
                        removedLineCount: k,
                        addedLineCount: a
                    })
                }
            },
            getProjections: function () {
                return this._projections.slice(0)
            },
            getBaseModel: function () {
                return this._model
            },
            mapOffset: function (e, b) {
                var d = this._projections,
                    h = 0,
                    k, f;
                if (b) {
                    for (k = 0; k < d.length; k++) {
                        f = d[k];
                        if (f.start > e) break;
                        if (f.end > e) return -1;
                        h += f._model.getCharCount() - (f.end - f.start)
                    }
                    return e + h
                }
                for (k = 0; k < d.length; k++) {
                    f = d[k];
                    if (f.start > e - h) break;
                    var a = f._model.getCharCount();
                    if (f.start + a > e - h) return -1;
                    h += a - (f.end - f.start)
                }
                return e - h
            },
            removeProjection: function (e) {
                var b, d = 0;
                for (b = 0; b < this._projections.length; b++) {
                    var h = this._projections[b];
                    if (h === e) {
                        e = h;
                        break
                    }
                    d += h._model.getCharCount() - (h.end - h.start)
                }
                if (b < this._projections.length) {
                    var h = this._model,
                        d = e.start + d,
                        k = e.end - e.start,
                        f = e._lineCount,
                        a = e._model.getCharCount(),
                        c = e._model.getLineCount() - 1;
                    this.onChanging({
                        type: "Changing",
                        text: h.getText(e.start, e.end),
                        start: d,
                        removedCharCount: a,
                        addedCharCount: k,
                        removedLineCount: c,
                        addedLineCount: f
                    });
                    this._projections.splice(b, 1);
                    this.onChanged({
                        type: "Changed",
                        start: d,
                        removedCharCount: a,
                        addedCharCount: k,
                        removedLineCount: c,
                        addedLineCount: f
                    })
                }
            },
            _binarySearch: function (e, b) {
                for (var d = e.length,
                    h = -1,
                    k; d - h > 1;) k = Math.floor((d + h) / 2),
                        b <= e[k].start ? d = k : h = k;
                return d
            },
            getCharCount: function () {
                for (var e = this._model.getCharCount(), b = this._projections, d = 0; d < b.length; d++) {
                    var h = b[d];
                    e += h._model.getCharCount() - (h.end - h.start)
                }
                return e
            },
            getLine: function (e, b) {
                if (e < 0) return null;
                var d = this._model,
                    h = this._projections,
                    k = 0,
                    f = [],
                    a = 0,
                    c,
                    i,
                    m;
                for (c = 0; c < h.length; c++) {
                    m = h[c];
                    if (m._lineIndex >= e - k) break;
                    i = m._model.getLineCount() - 1;
                    if (m._lineIndex + i >= e - k)
                        if (a = e - (m._lineIndex + k), a < i) return m._model.getLine(a, b);
                        else f.push(m._model.getLine(i));
                    a = m.end;
                    k += i - m._lineCount
                }
                for (a = Math.max(a, d.getLineStart(e - k)); c < h.length; c++) {
                    m = h[c];
                    if (m._lineIndex > e - k) break;
                    f.push(d.getText(a, m.start));
                    i = m._model.getLineCount() - 1;
                    if (m._lineIndex + i > e - k) return f.push(m._model.getLine(0, b)),
                        f.join("");
                    f.push(m._model.getText());
                    a = m.end;
                    k += i - m._lineCount
                }
                h = d.getLineEnd(e - k, b);
                a < h && f.push(d.getText(a, h));
                return f.join("")
            },
            getLineAtOffset: function (e) {
                for (var b = this._model,
                    d = this._projections,
                    h = 0,
                    k = 0,
                    f = 0; f < d.length; f++) {
                    var a = d[f];
                    if (a.start > e - h) break;
                    var c = a._model.getCharCount();
                    if (a.start + c > e - h) {
                        d = e - (a.start + h);
                        k += a._model.getLineAtOffset(d);
                        h += d;
                        break
                    }
                    k += a._model.getLineCount() - 1 - a._lineCount;
                    h += c - (a.end - a.start)
                }
                return b.getLineAtOffset(e - h) + k
            },
            getLineCount: function () {
                for (var e = this._projections,
                    b = this._model.getLineCount(), d = 0; d < e.length; d++) {
                    var h = e[d];
                    b += h._model.getLineCount() - 1 - h._lineCount
                }
                return b
            },
            getLineDelimiter: function () {
                return this._model.getLineDelimiter()
            },
            getLineEnd: function (e, b) {
                if (e < 0) return -1;
                for (var d = this._model,
                    h = this._projections,
                    k = 0,
                    f = 0,
                    a = 0; a < h.length; a++) {
                    var c = h[a];
                    if (c._lineIndex > e - k) break;
                    var i = c._model.getLineCount() - 1;
                    if (c._lineIndex + i > e - k) return c._model.getLineEnd(e - (c._lineIndex + k), b) + c.start + f;
                    f += c._model.getCharCount() - (c.end - c.start);
                    k += i - c._lineCount
                }
                return d.getLineEnd(e - k, b) + f
            },
            getLineStart: function (e) {
                if (e < 0) return -1;
                for (var b = this._model,
                    d = this._projections,
                    h = 0,
                    k = 0,
                    f = 0; f < d.length; f++) {
                    var a = d[f];
                    if (a._lineIndex >= e - h) break;
                    var c = a._model.getLineCount() - 1;
                    if (a._lineIndex + c >= e - h) return a._model.getLineStart(e - (a._lineIndex + h)) + a.start + k;
                    k += a._model.getCharCount() - (a.end - a.start);
                    h += c - a._lineCount
                }
                return b.getLineStart(e - h) + k
            },
            getText: function (e, b) {
                e === void 0 && (e = 0);
                var d = this._model,
                    h = this._projections,
                    k = 0,
                    f = [],
                    a,
                    c,
                    i;
                for (a = 0; a < h.length; a++) {
                    c = h[a];
                    if (c.start > e - k) break;
                    i = c._model.getCharCount();
                    if (c.start + i > e - k)
                        if (b !== void 0 && c.start + i > b - k) return c._model.getText(e - (c.start + k), b - (c.start + k));
                        else f.push(c._model.getText(e - (c.start + k))),
                            e = c.end + k + i - (c.end - c.start);
                    k += i - (c.end - c.start)
                }
                var m = e - k;
                if (b !== void 0) {
                    for (; a < h.length; a++) {
                        c = h[a];
                        if (c.start > b - k) break;
                        f.push(d.getText(m, c.start));
                        i = c._model.getCharCount();
                        if (c.start + i > b - k) return f.push(c._model.getText(0, b - (c.start + k))),
                            f.join("");
                        f.push(c._model.getText());
                        m = c.end;
                        k += i - (c.end - c.start)
                    }
                    f.push(d.getText(m, b - k))
                } else {
                    for (; a < h.length; a++) c = h[a],
                        f.push(d.getText(m, c.start)),
                        f.push(c._model.getText()),
                        m = c.end;
                    f.push(d.getText(m))
                }
                return f.join("")
            },
            _onChanging: function (e, b, d, h, k, f) {
                for (var a = this._model,
                    c = this._projections,
                    i, m = 0,
                    n, j = b + d; i < c.length; i++) {
                    d = c[i];
                    if (d.start > b) break;
                    m += d._model.getCharCount() - (d.end - d.start)
                }
                b += m;
                for (var q = i; i < c.length; i++) {
                    d = c[i];
                    if (d.start > j) break;
                    m += d._model.getCharCount() - (d.end - d.start);
                    n += d._model.getLineCount() - 1 - d._lineCount
                }
                d = j + m;
                m = i;
                this.onChanging(b, d - b, h, k + n, f);
                c.splice(c, m - q);
                for (e = e.length - (d - b); i < c.length; i++) d = c[i],
                    d.start += e,
                    d.end += e,
                    d._lineIndex = a.getLineAtOffset(d.start)
            },
            onChanging: function (e) {
                return this.dispatchEvent(e)
            },
            onChanged: function (e) {
                return this.dispatchEvent(e)
            },
            setLineDelimiter: function (e) {
                this._model.setLineDelimiter(e)
            },
            setText: function (e, b, d) {
                e === void 0 && (e = "");
                b === void 0 && (b = 0);
                var h = b,
                    k = d,
                    f = this._model,
                    a = this._projections,
                    c = 0,
                    i = 0,
                    m, n, j, q, r, l = 0;
                for (m = 0; m < a.length; m++) {
                    n = a[m];
                    if (n.start > b - c) break;
                    j = n._model.getCharCount();
                    if (n.start + j > b - c)
                        if (d !== void 0 && n.start + j > d - c) {
                            n._model.setText(e, b - (n.start + c), d - (n.start + c));
                            return
                        } else l = n._model.getLineCount() - 1 - n._model.getLineAtOffset(b - (n.start + c)),
                            q = {
                                projection: n,
                                start: b - (n.start + c)
                            },
                            b = n.end + c + j - (n.end - n.start);
                    i += n._model.getLineCount() - 1 - n._lineCount;
                    c += j - (n.end - n.start)
                }
                b -= c;
                var o = m,
                    l = f.getLineAtOffset(b) + i - l;
                if (d !== void 0)
                    for (; m < a.length; m++) {
                        n = a[m];
                        if (n.start > d - c) break;
                        j = n._model.getCharCount();
                        if (n.start + j > d - c) {
                            i += n._model.getLineAtOffset(d - (n.start + c));
                            j = d - (n.start + c);
                            d = n.end + c;
                            r = {
                                projection: n,
                                end: j
                            };
                            break
                        }
                        i += n._model.getLineCount() - 1 - n._lineCount;
                        c += j - (n.end - n.start)
                    } else {
                    for (; m < a.length; m++) n = a[m],
                        i += n._model.getLineCount() - 1 - n._lineCount,
                        c += n._model.getCharCount() - (n.end - n.start);
                    d = k = f.getCharCount() + c
                }
                d -= c;
                n = f.getLineAtOffset(d) + i;
                k -= h;
                for (var i = n - l,
                    l = e.length,
                    g = j = n = c = 0; ;) {
                    n !== -1 && n <= g && (n = e.indexOf("\r", g));
                    j !== -1 && j <= g && (j = e.indexOf("\n", g));
                    if (j === -1 && n === -1) break;
                    g = n !== -1 && j !== -1 ? n + 1 === j ? j + 1 : (n < j ? n : j) + 1 : n !== -1 ? n + 1 : j + 1;
                    c++
                }
                this.onChanging({
                    type: "Changing",
                    text: e,
                    start: h,
                    removedCharCount: k,
                    addedCharCount: l,
                    removedLineCount: i,
                    addedLineCount: c
                });
                f.setText(e, b, d);
                if (q) n = q.projection,
                    n._model.setText("", q.start);
                if (r) n = r.projection,
                    n._model.setText("", 0, r.end),
                    n.start = n.end,
                    n._lineCount = 0;
                a.splice(o, m - o);
                for (e = e.length - (d - b); m < a.length; m++) n = a[m],
                    n.start += e,
                    n.end += e,
                    n._lineIndex = f.getLineAtOffset(n.start);
                this.onChanged({
                    type: "Changed",
                    start: h,
                    removedCharCount: k,
                    addedCharCount: l,
                    removedLineCount: i,
                    addedLineCount: c
                })
            }
        };
        p.EventTarget.addMixin(o.prototype);
        return {
            ProjectionTextModel: o
        }
    });
define("orion/editor/annotations", ["i18n!orion/editor/nls/messages", "orion/editor/eventTarget"],
    function (l, p) {
        function o(a, c, b) {
            this.start = a;
            this.end = c;
            this._projectionModel = b;
            this.html = this._expandedHTML;
            this.style = this._expandedStyle;
            this.expanded = !0
        }

        function e() { }

        function b(a, c) {
            var b = a.lastIndexOf("."),
                b = a.substring(b + 1),
                d = {
                    title: l[b],
                    style: {
                        styleClass: "annotation " + b
                    },
                    html: "<div class='annotationHTML " + b + "'></div>",
                    overviewStyle: {
                        styleClass: "annotationOverview " + b
                    }
                };
            c ? d.lineStyle = {
                styleClass: "annotationLine " + b
            } : d.rangeStyle = {
                styleClass: "annotationRange " + b
            };
            e.registerType(a, d)
        }

        function d() { }

        function h(a) {
            this._annotations = [];
            var c = this;
            this._listener = {
                onChanged: function (a) {
                    c._onChanged(a)
                }
            };
            this.setTextModel(a)
        }

        function k(a, c) {
            this._view = a;
            this._annotationModel = c;
            var b = this;
            this._listener = {
                onDestroy: function (a) {
                    b._onDestroy(a)
                },
                onLineStyle: function (a) {
                    b._onLineStyle(a)
                },
                onChanged: function (a) {
                    b._onAnnotationModelChanged(a)
                }
            };
            a.addEventListener("Destroy", this._listener.onDestroy);
            a.addEventListener("postLineStyle", this._listener.onLineStyle);
            c.addEventListener("Changed", this._listener.onChanged)
        }
        o.prototype = {
            _expandedHTML: "<div class='annotationHTML expanded'></div>",
            _expandedStyle: {
                styleClass: "annotation expanded"
            },
            _collapsedHTML: "<div class='annotationHTML collapsed'></div>",
            _collapsedStyle: {
                styleClass: "annotation collapsed"
            },
            collapse: function () {
                if (this.expanded) {
                    this.expanded = !1;
                    this.html = this._collapsedHTML;
                    this.style = this._collapsedStyle;
                    var a = this._projectionModel,
                        c = a.getBaseModel();
                    this._projection = {
                        start: c.getLineStart(c.getLineAtOffset(this.start) + 1),
                        end: c.getLineEnd(c.getLineAtOffset(this.end), !0)
                    };
                    a.addProjection(this._projection)
                }
            },
            expand: function () {
                if (!this.expanded) this.expanded = !0,
                    this.html = this._expandedHTML,
                    this.style = this._expandedStyle,
                    this._projectionModel.removeProjection(this._projection)
            }
        };
        e.ANNOTATION_ERROR = "orion.annotation.error";
        e.ANNOTATION_WARNING = "orion.annotation.warning";
        e.ANNOTATION_TASK = "orion.annotation.task";
        e.ANNOTATION_BREAKPOINT = "orion.annotation.breakpoint";
        e.ANNOTATION_BOOKMARK = "orion.annotation.bookmark";
        e.ANNOTATION_FOLDING = "orion.annotation.folding";
        e.ANNOTATION_CURRENT_BRACKET = "orion.annotation.currentBracket";
        e.ANNOTATION_MATCHING_BRACKET = "orion.annotation.matchingBracket";
        e.ANNOTATION_CURRENT_LINE = "orion.annotation.currentLine";
        e.ANNOTATION_CURRENT_SEARCH = "orion.annotation.currentSearch";
        e.ANNOTATION_MATCHING_SEARCH = "orion.annotation.matchingSearch";
        e.ANNOTATION_READ_OCCURRENCE = "orion.annotation.readOccurrence";
        e.ANNOTATION_WRITE_OCCURRENCE = "orion.annotation.writeOccurrence";
        e.ANNOTATION_SELECTED_LINKED_GROUP = "orion.annotation.selectedLinkedGroup";
        e.ANNOTATION_CURRENT_LINKED_GROUP = "orion.annotation.currentLinkedGroup";
        e.ANNOTATION_LINKED_GROUP = "orion.annotation.linkedGroup";
        var f = {};
        e.registerType = function (a, c) {
            var b = c;
            if (typeof b !== "function") b = function (a, c, b) {
                this.start = a;
                this.end = c;
                if (b !== void 0) this.title = b
            },
                b.prototype = c;
            b.prototype.type = a;
            f[a] = b;
            return a
        };
        e.createAnnotation = function (a, c, b, d) {
            return new (this.getType(a))(c, b, d)
        };
        e.getType = function (a) {
            return f[a]
        };
        b(e.ANNOTATION_ERROR);
        b(e.ANNOTATION_WARNING);
        b(e.ANNOTATION_TASK);
        b(e.ANNOTATION_BREAKPOINT);
        b(e.ANNOTATION_BOOKMARK);
        b(e.ANNOTATION_CURRENT_BRACKET);
        b(e.ANNOTATION_MATCHING_BRACKET);
        b(e.ANNOTATION_CURRENT_SEARCH);
        b(e.ANNOTATION_MATCHING_SEARCH);
        b(e.ANNOTATION_READ_OCCURRENCE);
        b(e.ANNOTATION_WRITE_OCCURRENCE);
        b(e.ANNOTATION_SELECTED_LINKED_GROUP);
        b(e.ANNOTATION_CURRENT_LINKED_GROUP);
        b(e.ANNOTATION_LINKED_GROUP);
        b(e.ANNOTATION_CURRENT_LINE, !0);
        e.registerType(e.ANNOTATION_FOLDING, o);
        d.addMixin = function (a) {
            var c = d.prototype,
                b;
            for (b in c) c.hasOwnProperty(b) && (a[b] = c[b])
        };
        d.prototype = {
            addAnnotationType: function (a) {
                if (!this._annotationTypes) this._annotationTypes = [];
                this._annotationTypes.push(a)
            },
            getAnnotationTypePriority: function (a) {
                if (this._annotationTypes)
                    for (var c = 0; c < this._annotationTypes.length; c++)
                        if (this._annotationTypes[c] === a) return c + 1;
                return 0
            },
            getAnnotationsByType: function (a, c, b) {
                a = a.getAnnotations(c, b);
                for (b = []; a.hasNext();) c = a.next(),
                    this.getAnnotationTypePriority(c.type) !== 0 && b.push(c);
                var d = this;
                b.sort(function (a, c) {
                    return d.getAnnotationTypePriority(a.type) - d.getAnnotationTypePriority(c.type)
                });
                return b
            },
            isAnnotationTypeVisible: function (a) {
                return this.getAnnotationTypePriority(a) !== 0
            },
            removeAnnotationType: function (a) {
                if (this._annotationTypes)
                    for (var c = 0; c < this._annotationTypes.length; c++)
                        if (this._annotationTypes[c] === a) {
                            this._annotationTypes.splice(c, 1);
                            break
                        }
            }
        };
        h.prototype = {
            addAnnotation: function (a) {
                if (a) {
                    var c = this._annotations,
                        b = this._binarySearch(c, a.start);
                    c.splice(b, 0, a);
                    this.onChanged({
                        type: "Changed",
                        added: [a],
                        removed: [],
                        changed: []
                    })
                }
            },
            getTextModel: function () {
                return this._model
            },
            getAnnotations: function (a, c) {
                var b = this._annotations,
                    d, f = 0,
                    j = function () {
                        for (; f < b.length;) {
                            var d = b[f++];
                            if (a === d.start || (a > d.start ? a < d.end : d.start < c)) return d;
                            if (d.start >= c) break
                        }
                        return null
                    };
                d = j();
                return {
                    next: function () {
                        var a = d;
                        a && (d = j());
                        return a
                    },
                    hasNext: function () {
                        return d !== null
                    }
                }
            },
            modifyAnnotation: function (a) {
                if (a && !(this._getAnnotationIndex(a) < 0)) this.onChanged({
                    type: "Changed",
                    added: [],
                    removed: [],
                    changed: [a]
                })
            },
            onChanged: function (a) {
                return this.dispatchEvent(a)
            },
            removeAnnotations: function (a) {
                var c = this._annotations,
                    b, d;
                if (a) {
                    b = [];
                    for (d = c.length - 1; d >= 0; d--) {
                        var f = c[d];
                        f.type === a && c.splice(d, 1);
                        b.splice(0, 0, f)
                    }
                } else b = c;
                this.onChanged({
                    type: "Changed",
                    removed: b,
                    added: [],
                    changed: []
                })
            },
            removeAnnotation: function (a) {
                if (a && (a = this._getAnnotationIndex(a), !(a < 0))) this.onChanged({
                    type: "Changed",
                    removed: this._annotations.splice(a, 1),
                    added: [],
                    changed: []
                })
            },
            replaceAnnotations: function (a, c) {
                var b = this._annotations,
                    d, f, j, e = [];
                if (a)
                    for (d = a.length - 1; d >= 0; d--) j = a[d],
                        f = this._getAnnotationIndex(j),
                        f < 0 || (b.splice(f, 1), e.splice(0, 0, j));
                c || (c = []);
                for (d = 0; d < c.length; d++) j = c[d],
                    f = this._binarySearch(b, j.start),
                    b.splice(f, 0, j);
                this.onChanged({
                    type: "Changed",
                    removed: e,
                    added: c,
                    changed: []
                })
            },
            setTextModel: function (a) {
                this._model && this._model.removeEventListener("Changed", this._listener.onChanged);
                (this._model = a) && this._model.addEventListener("Changed", this._listener.onChanged)
            },
            _binarySearch: function (a, c) {
                for (var b = a.length,
                    d = -1,
                    f; b - d > 1;) f = Math.floor((b + d) / 2),
                        c <= a[f].start ? b = f : d = f;
                return b
            },
            _getAnnotationIndex: function (a) {
                for (var c = this._annotations,
                    b = this._binarySearch(c, a.start); b < c.length && c[b].start === a.start;) {
                    if (c[b] === a) return b;
                    b++
                }
                return -1
            },
            _onChanged: function (a) {
                var c = a.start,
                    b = a.removedCharCount,
                    d = this._annotations,
                    f = c + b;
                if (0 < d.length) {
                    for (var j = {
                        type: "Changed",
                        added: [],
                        removed: [],
                        changed: [],
                        textModelChangedEvent: a
                    },
                        a = a.addedCharCount - b, b = 0; b < d.length; b++) {
                        var e = d[b];
                        e.start >= f ? (e.start += a, e.end += a, j.changed.push(e)) : e.end <= c || (e.start < c && f < e.end ? (e.end += a, j.changed.push(e)) : (d.splice(b, 1), j.removed.push(e), b--))
                    }
                    if (j.added.length > 0 || j.removed.length > 0 || j.changed.length > 0) this.onChanged(j)
                }
            }
        };
        p.EventTarget.addMixin(h.prototype);
        k.prototype = {
            destroy: function () {
                var a = this._view;
                if (a) a.removeEventListener("Destroy", this._listener.onDestroy),
                    a.removeEventListener("LineStyle", this._listener.onLineStyle),
                    this.view = null;
                (a = this._annotationModel) && a.removeEventListener("Changed", this._listener.onChanged)
            },
            _mergeStyle: function (a, c) {
                if (c) {
                    a || (a = {});
                    a.styleClass && c.styleClass && a.styleClass !== c.styleClass ? a.styleClass += " " + c.styleClass : a.styleClass = c.styleClass;
                    var b;
                    if (c.tagName && !a.tagName) a.tagName = c.tagName;
                    if (c.style) {
                        if (!a.style) a.style = {};
                        for (b in c.style) a.style[b] || (a.style[b] = c.style[b])
                    }
                    if (c.attributes) {
                        if (!a.attributes) a.attributes = {};
                        for (b in c.attributes) a.attributes[b] || (a.attributes[b] = c.attributes[b])
                    }
                }
                return a
            },
            _mergeStyleRanges: function (a, c) {
                a || (a = []);
                var b, d;
                for (d = 0; d < a.length && c; d++) {
                    var f = a[d];
                    if (c.end <= f.start) break;
                    if (!(c.start >= f.end)) {
                        b = this._mergeStyle({},
                            f.style);
                        b = this._mergeStyle(b, c.style);
                        var j = [];
                        j.push(d, 1);
                        c.start < f.start && j.push({
                            start: c.start,
                            end: f.start,
                            style: c.style
                        });
                        c.start > f.start && j.push({
                            start: f.start,
                            end: c.start,
                            style: f.style
                        });
                        j.push({
                            start: Math.max(f.start, c.start),
                            end: Math.min(f.end, c.end),
                            style: b
                        });
                        c.end < f.end && j.push({
                            start: c.end,
                            end: f.end,
                            style: f.style
                        });
                        c = c.end > f.end ? {
                            start: f.end,
                            end: c.end,
                            style: c.style
                        } : null;
                        Array.prototype.splice.apply(a, j)
                    }
                }
                c && (b = this._mergeStyle({},
                    c.style), a.splice(d, 0, {
                        start: c.start,
                        end: c.end,
                        style: b
                    }));
                return a
            },
            _onAnnotationModelChanged: function (a) {
                function c(a) {
                    for (var c = 0; c < a.length; c++)
                        if (d.isAnnotationTypeVisible(a[c].type)) {
                            var e = a[c].start,
                                h = a[c].end;
                            f.getBaseModel && (e = f.mapOffset(e, !0), h = f.mapOffset(h, !0));
                            e !== -1 && h !== -1 && b.redrawRange(e, h)
                        }
                }
                if (!a.textModelChangedEvent) {
                    var b = this._view;
                    if (b) {
                        var d = this,
                            f = b.getModel();
                        c(a.added);
                        c(a.removed);
                        c(a.changed)
                    }
                }
            },
            _onDestroy: function () {
                this.destroy()
            },
            _onLineStyle: function (a) {
                var c = this._annotationModel,
                    b = a.textView.getModel(),
                    d = c.getTextModel(),
                    f = a.lineStart,
                    j = a.lineStart + a.lineText.length;
                d !== b && (f = b.mapOffset(f), j = b.mapOffset(j));
                for (c = c.getAnnotations(f, j); c.hasNext();)
                    if (f = c.next(), this.isAnnotationTypeVisible(f.type)) {
                        if (f.rangeStyle) {
                            var j = f.start,
                                e = f.end;
                            d !== b && (j = b.mapOffset(j, !0), e = b.mapOffset(e, !0));
                            a.ranges = this._mergeStyleRanges(a.ranges, {
                                start: j,
                                end: e,
                                style: f.rangeStyle
                            })
                        }
                        if (f.lineStyle) a.style = this._mergeStyle({},
                            a.style),
                            a.style = this._mergeStyle(a.style, f.lineStyle)
                    }
            }
        };
        d.addMixin(k.prototype);
        return {
            FoldingAnnotation: o,
            AnnotationType: e,
            AnnotationTypeList: d,
            AnnotationModel: h,
            AnnotationStyler: k
        }
    });
define("orion/editor/tooltip", ["i18n!orion/editor/nls/messages", "orion/editor/textView", "orion/editor/textModel", "orion/editor/projectionTextModel", "orion/util"],
    function (l, p, o, e, b) {
        function d(b) {
            this._view = b;
            this._create(b.getOptions("parent").ownerDocument);
            b.addEventListener("Destroy", this, this.destroy)
        }
        d.getTooltip = function (b) {
            if (!b._tooltip) b._tooltip = new d(b);
            return b._tooltip
        };
        d.prototype = {
            _create: function (d) {
                if (!this._tooltipDiv) {
                    var e = this._tooltipDiv = b.createElement(d, "div");
                    e.className = "textviewTooltip";
                    e.setAttribute("aria-live", "assertive");
                    e.setAttribute("aria-atomic", "true");
                    var f = this._tooltipContents = b.createElement(d, "div");
                    e.appendChild(f);
                    d.body.appendChild(e);
                    this.hide()
                }
            },
            _getWindow: function () {
                var b = this._tooltipDiv.ownerDocument;
                return b.defaultView || b.parentWindow
            },
            destroy: function () {
                if (this._tooltipDiv) {
                    this.hide();
                    var b = this._tooltipDiv.parentNode;
                    b && b.removeChild(this._tooltipDiv);
                    this._tooltipDiv = null
                }
            },
            hide: function () {
                if (this._contentsView) this._contentsView.destroy(),
                    this._contentsView = null;
                if (this._tooltipContents) this._tooltipContents.innerHTML = "";
                if (this._tooltipDiv) this._tooltipDiv.style.visibility = "hidden";
                var b = this._getWindow();
                if (this._showTimeout) b.clearTimeout(this._showTimeout),
                    this._showTimeout = null;
                if (this._hideTimeout) b.clearTimeout(this._hideTimeout),
                    this._hideTimeout = null;
                if (this._fadeTimeout) b.clearInterval(this._fadeTimeout),
                    this._fadeTimeout = null
            },
            isVisible: function () {
                return this._tooltipDiv && this._tooltipDiv.style.visibility === "visible"
            },
            setTarget: function (b, d) {
                if (this.target !== b && (this._target = b, this.hide(), b)) {
                    var f = this;
                    if (d === 0) f.show(!0);
                    else {
                        var a = this._getWindow();
                        f._showTimeout = a.setTimeout(function () {
                            f.show(!0)
                        },
                            d ? d : 500)
                    }
                }
            },
            show: function (b) {
                if (this._target) {
                    var d = this._target.getTooltipInfo();
                    if (d) {
                        var f = this._tooltipDiv,
                            a = this._tooltipContents;
                        f.style.left = f.style.right = f.style.width = f.style.height = a.style.width = a.style.height = "auto";
                        var c = d.contents;
                        c instanceof Array && (c = this._getAnnotationContents(c));
                        if (typeof c === "string") a.innerHTML = c;
                        else if (this._isNode(c)) a.appendChild(c);
                        else if (c instanceof e.ProjectionTextModel) {
                            var i = this._view,
                                m = i.getOptions();
                            m.wrapMode = !1;
                            m.parent = a;
                            var n = m.themeClass;
                            n ? ((n = n.replace("tooltip", "")) && (n = " " + n), n = "tooltip" + n) : n = "tooltip";
                            m.themeClass = n;
                            m = this._contentsView = new p.TextView(m);
                            m._clientDiv.contentEditable = !1;
                            m.addEventListener("LineStyle",
                                function (a) {
                                    i.onLineStyle(a)
                                });
                            m.setModel(c);
                            c = m.computeSize();
                            a.style.width = c.width + "px";
                            a.style.height = c.height + "px";
                            m.resize()
                        } else return;
                        a = f.ownerDocument.documentElement;
                        d.anchor === "right" ? (c = a.clientWidth - d.x, f.style.right = c + "px") : (c = parseInt(this._getNodeStyle(f, "padding-left", "0"), 10), c += parseInt(this._getNodeStyle(f, "border-left-width", "0"), 10), c = d.x - c, f.style.left = c + "px");
                        f.style.maxWidth = a.clientWidth - c - 10 + "px";
                        c = parseInt(this._getNodeStyle(f, "padding-top", "0"), 10);
                        c += parseInt(this._getNodeStyle(f, "border-top-width", "0"), 10);
                        c = d.y - c;
                        f.style.top = c + "px";
                        f.style.maxHeight = a.clientHeight - c - 10 + "px";
                        f.style.opacity = "1";
                        f.style.visibility = "visible";
                        if (b) {
                            var j = this,
                                q = this._getWindow();
                            j._hideTimeout = q.setTimeout(function () {
                                var a = parseFloat(j._getNodeStyle(f, "opacity", "1"));
                                j._fadeTimeout = q.setInterval(function () {
                                    f.style.visibility === "visible" && a > 0 ? (a -= 0.1, f.style.opacity = a) : j.hide()
                                },
                                    50)
                            },
                                5E3)
                        }
                    }
                }
            },
            _getAnnotationContents: function (b) {
                function d(c) {
                    var b = c.title;
                    if (b === "") return null;
                    var f = "<div>";
                    c.html && (f += c.html + "&nbsp;");
                    if (!b) b = c.end,
                        c = a.getLineStart(a.getLineAtOffset(c.start)),
                        b = a.getLineEnd(a.getLineAtOffset(b), !0),
                        b = a.getText(c, b);
                    b = b.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    f += "<span style='vertical-align:middle;'>" + b + "</span><div>";
                    return f
                }
                if (b.length === 0) return null;
                var f = this._view.getModel(),
                    a = f.getBaseModel ? f.getBaseModel() : f;
                if (b.length === 1)
                    if (f = b[0], f.title !== void 0) return d(f);
                    else {
                        var b = new e.ProjectionTextModel(a),
                            c = a.getLineStart(a.getLineAtOffset(f.start)),
                            i = a.getCharCount();
                        f.end !== i && b.addProjection({
                            start: f.end,
                            end: i
                        });
                        c > 0 && b.addProjection({
                            start: 0,
                            end: c
                        });
                        return b
                    }
                else {
                    c = "<div><em>" + l.multipleAnnotations + "</em></div>";
                    for (i = 0; i < b.length; i++) f = b[i],
                        (f = d(f)) && (c += f);
                    return c
                }
            },
            _getNodeStyle: function (b, d, f) {
                var a;
                if (b && (a = b.style[d], !a))
                    if (b.currentStyle) {
                        for (a = 0;
                            (a = d.indexOf("-", a)) !== -1;) d = d.substring(0, a) + d.substring(a + 1, a + 2).toUpperCase() + d.substring(a + 2);
                        a = b.currentStyle[d]
                    } else a = (b = b.ownerDocument.defaultView.getComputedStyle(b, null)) ? b.getPropertyValue(d) : null;
                return a || f
            },
            _isNode: function (b) {
                return typeof Node === "object" ? b instanceof Node : b && typeof b === "object" && typeof b.nodeType === "number" && typeof b.nodeName === "string"
            }
        };
        return {
            Tooltip: d
        }
    });
define("orion/editor/rulers", ["i18n!orion/editor/nls/messages", "orion/editor/annotations", "orion/editor/tooltip", "orion/util"],
    function (l, p, o, e) {
        function b(a, c, b, d) {
            this._location = c || "left";
            this._overview = b || "page";
            this._rulerStyle = d;
            this._view = null;
            var f = this;
            this._listener = {
                onTextModelChanged: function (a) {
                    f._onTextModelChanged(a)
                },
                onAnnotationModelChanged: function (a) {
                    f._onAnnotationModelChanged(a)
                }
            };
            this.setAnnotationModel(a)
        }

        function d(a, c, d, f, e) {
            b.call(this, a, c, "page", d);
            this._oddStyle = f || {
                style: {
                    backgroundColor: "white"
                }
            };
            this._evenStyle = e || {
                style: {
                    backgroundColor: "white"
                }
            };
            this._numOfDigits = 0
        }

        function h(a, c, d) {
            b.call(this, a, c, "page", d)
        }

        function k(a, c, d) {
            b.call(this, a, c, "document", d)
        }

        function f(a, c, b) {
            h.call(this, a, c, b)
        }
        b.prototype = {
            getAnnotations: function (a, c) {
                var b = this._annotationModel;
                if (!b) return [];
                var d = this._view.getModel(),
                    f = d.getLineStart(a),
                    j = d.getLineEnd(c - 1),
                    e = d;
                d.getBaseModel && (e = d.getBaseModel(), f = d.mapOffset(f), j = d.mapOffset(j));
                for (var h = [], b = this.getAnnotationsByType(b, f, j), f = 0; f < b.length; f++)
                    for (var j = b[f], k = e.getLineAtOffset(j.start), l = e.getLineAtOffset(Math.max(j.start, j.end - 1)), g = k; g <= l; g++) {
                        var o = g;
                        if (d !== e) {
                            o = e.getLineStart(g);
                            o = d.mapOffset(o, !0);
                            if (o === -1) continue;
                            o = d.getLineAtOffset(o)
                        }
                        if (a <= o && o < c) {
                            var p = this._mergeAnnotation(h[o], j, g - k, l - k + 1);
                            p && (h[o] = p)
                        }
                    }
                if (!this._multiAnnotation && this._multiAnnotationOverlay)
                    for (var s in h) h[s]._multiple && (h[s].html += this._multiAnnotationOverlay.html);
                return h
            },
            getAnnotationModel: function () {
                return this._annotationModel
            },
            getLocation: function () {
                return this._location
            },
            getOverview: function () {
                return this._overview
            },
            getRulerStyle: function () {
                return this._rulerStyle
            },
            getView: function () {
                return this._view
            },
            getWidestAnnotation: function () {
                return null
            },
            setAnnotationModel: function (a) {
                this._annotationModel && this._annotationModel.removEventListener("Changed", this._listener.onAnnotationModelChanged);
                (this._annotationModel = a) && this._annotationModel.addEventListener("Changed", this._listener.onAnnotationModelChanged)
            },
            setMultiAnnotation: function (a) {
                this._multiAnnotation = a
            },
            setMultiAnnotationOverlay: function (a) {
                this._multiAnnotationOverlay = a
            },
            setView: function (a) {
                this._onTextModelChanged && this._view && this._view.removeEventListener("ModelChanged", this._listener.onTextModelChanged);
                this._view = a;
                this._onTextModelChanged && this._view && this._view.addEventListener("ModelChanged", this._listener.onTextModelChanged)
            },
            onClick: function (a) {
                if (a !== void 0) {
                    var c = this._view,
                        b = c.getModel(),
                        d = b,
                        f = b.getLineStart(a),
                        j = f,
                        e = this._annotationModel;
                    if (e) {
                        j = c.getSelection();
                        c = Math.max(j.start, j.end);
                        j = b.getLineEnd(a, !0);
                        f <= c && c < b.getLineEnd(a) && (f = c + 1);
                        b.getBaseModel && (f = b.mapOffset(f), j = b.mapOffset(j), d = b.getBaseModel());
                        for (var h, a = e.getAnnotations(f, j); !h && a.hasNext();) j = a.next(),
                            this.isAnnotationTypeVisible(j.type) && (h = j);
                        h && d.getLineAtOffset(h.start) === d.getLineAtOffset(f) ? (f = h.start, j = h.end) : j = f;
                        b.getBaseModel && (f = b.mapOffset(f, !0), j = b.mapOffset(j, !0))
                    } (b = o.Tooltip.getTooltip(this._view)) && b.setTarget(null);
                    this._view.setSelection(j, f, 1 / 3,
                        function () { })
                }
            },
            onDblClick: function () { },
            onMouseMove: function (a, c) {
                var b = o.Tooltip.getTooltip(this._view);
                if (b && !(b.isVisible() && this._tooltipLineIndex === a)) {
                    this._tooltipLineIndex = a;
                    var d = this;
                    b.setTarget({
                        y: c.clientY,
                        getTooltipInfo: function () {
                            return d._getTooltipInfo(d._tooltipLineIndex, this.y)
                        }
                    })
                }
            },
            onMouseOver: function (a, c) {
                this.onMouseMove(a, c)
            },
            onMouseOut: function () {
                var a = o.Tooltip.getTooltip(this._view);
                a && a.setTarget(null)
            },
            _getTooltipInfo: function (a, c) {
                if (a !== void 0) {
                    var b = this._view,
                        d = b.getModel(),
                        f = this._annotationModel,
                        j = [];
                    if (f) {
                        var j = d.getLineStart(a),
                            e = d.getLineEnd(a);
                        d.getBaseModel && (j = d.mapOffset(j), e = d.mapOffset(e));
                        j = this.getAnnotationsByType(f, j, e)
                    }
                    f = this._getTooltipContents(a, j);
                    if (!f) return null;
                    f = {
                        contents: f,
                        anchor: this.getLocation()
                    };
                    j = b.getClientArea();
                    j.y = this.getOverview() === "document" ? b.convert({
                        y: c
                    },
                        "view", "document").y : b.getLocationAtOffset(d.getLineStart(a)).y;
                    b.convert(j, "document", "page");
                    f.x = j.x;
                    f.y = j.y;
                    f.anchor === "right" && (f.x += j.width);
                    return f
                }
            },
            _getTooltipContents: function (a, c) {
                return c
            },
            _onAnnotationModelChanged: function (a) {
                function c(a) {
                    for (var c = 0; c < a.length; c++)
                        if (f.isAnnotationTypeVisible(a[c].type)) {
                            var j = a[c].start,
                                e = a[c].end;
                            d.getBaseModel && (j = d.mapOffset(j, !0), e = d.mapOffset(e, !0));
                            j !== -1 && e !== -1 && b.redrawLines(d.getLineAtOffset(j), d.getLineAtOffset(Math.max(j, e - 1)) + 1, f)
                        }
                }
                var b = this._view;
                if (b) {
                    var d = b.getModel(),
                        f = this,
                        j = d.getLineCount();
                    a.textModelChangedEvent ? (a = a.textModelChangedEvent.start, d.getBaseModel && (a = d.mapOffset(a, !0)), a = d.getLineAtOffset(a), b.redrawLines(a, j, f)) : (c(a.added), c(a.removed), c(a.changed))
                }
            },
            _mergeAnnotation: function (a, c, b) {
                a || (a = {});
                if (b === 0)
                    if (a.html && c.html) {
                        if (c.html !== a.html && !a._multiple && this._multiAnnotation) a.html = this._multiAnnotation.html;
                        a._multiple = !0
                    } else a.html = c.html;
                a.style = this._mergeStyle(a.style, c.style);
                return a
            },
            _mergeStyle: function (a, c) {
                if (c) {
                    a || (a = {});
                    a.styleClass && c.styleClass && a.styleClass !== c.styleClass ? a.styleClass += " " + c.styleClass : a.styleClass = c.styleClass;
                    var b;
                    if (c.style) {
                        if (!a.style) a.style = {};
                        for (b in c.style) a.style[b] || (a.style[b] = c.style[b])
                    }
                    if (c.attributes) {
                        if (!a.attributes) a.attributes = {};
                        for (b in c.attributes) a.attributes[b] || (a.attributes[b] = c.attributes[b])
                    }
                }
                return a
            }
        };
        p.AnnotationTypeList.addMixin(b.prototype);
        d.prototype = new b;
        d.prototype.getAnnotations = function (a, c) {
            for (var d = b.prototype.getAnnotations.call(this, a, c), f = this._view.getModel(), e = a; e < c; e++) {
                var j = e & 1 ? this._oddStyle : this._evenStyle,
                    h = e;
                f.getBaseModel && (h = f.getLineStart(h), h = f.getBaseModel().getLineAtOffset(f.mapOffset(h)));
                d[e] || (d[e] = {});
                d[e].html = h + 1 + "";
                if (!d[e].style) d[e].style = j
            }
            return d
        };
        d.prototype.getWidestAnnotation = function () {
            var a = this._view.getModel().getLineCount();
            return this.getAnnotations(a - 1, a)[a - 1]
        };
        d.prototype._onTextModelChanged = function (a) {
            var a = a.start,
                c = this._view.getModel(),
                b = ((c.getBaseModel ? c.getBaseModel().getLineCount() : c.getLineCount()) + "").length;
            if (this._numOfDigits !== b) this._numOfDigits = b,
                this._view.redrawLines(c.getLineAtOffset(a), c.getLineCount(), this)
        };
        h.prototype = new b;
        k.prototype = new b;
        k.prototype.getRulerStyle = function () {
            var a = {
                style: {
                    lineHeight: "1px",
                    fontSize: "1px"
                }
            };
            return a = this._mergeStyle(a, this._rulerStyle)
        };
        k.prototype._getTooltipContents = function (a, c) {
            if (c.length === 0) {
                var d = this._view.getModel(),
                    f = a;
                d.getBaseModel && (f = d.getLineStart(f), f = d.getBaseModel().getLineAtOffset(d.mapOffset(f)));
                return e.formatMessage(l.line, f + 1)
            }
            return b.prototype._getTooltipContents.call(this, a, c)
        };
        k.prototype._mergeAnnotation = function (a, c, b, d) {
            if (b === 0) {
                if (!a) a = {
                    html: "&nbsp;",
                    style: {
                        style: {
                            height: 3 * d + "px"
                        }
                    }
                },
                    a.style = this._mergeStyle(a.style, c.overviewStyle);
                return a
            }
        };
        f.prototype = new h;
        f.prototype.onClick = function (a) {
            if (a !== void 0) {
                var c = this._annotationModel;
                if (c) {
                    var b = this._view.getModel(),
                        d = b.getLineStart(a),
                        a = b.getLineEnd(a, !0);
                    b.getBaseModel && (d = b.mapOffset(d), a = b.mapOffset(a), b = b.getBaseModel());
                    for (var f, c = c.getAnnotations(d, a); !f && c.hasNext();) a = c.next(),
                        this.isAnnotationTypeVisible(a.type) && (f = a);
                    f && b.getLineAtOffset(f.start) === b.getLineAtOffset(d) && ((b = o.Tooltip.getTooltip(this._view)) && b.setTarget(null), f.expanded ? f.collapse() : f.expand(), this._annotationModel.modifyAnnotation(f))
                }
            }
        };
        f.prototype._getTooltipContents = function (a, c) {
            return c.length === 1 && c[0].expanded ? null : h.prototype._getTooltipContents.call(this, a, c)
        };
        f.prototype._onAnnotationModelChanged = function (a) {
            function c(a) {
                for (j = 0; j < a.length; j++)
                    if (f.isAnnotationTypeVisible(a[j].type)) {
                        var c = a[j].start;
                        d.getBaseModel && (c = d.mapOffset(c, !0));
                        c !== -1 && (k = Math.min(k, d.getLineAtOffset(c)))
                    }
            }
            if (a.textModelChangedEvent) h.prototype._onAnnotationModelChanged.call(this, a);
            else {
                var b = this._view;
                if (b) {
                    var d = b.getModel(),
                        f = this,
                        j,
                        e = d.getLineCount(),
                        k = e;
                    c(a.added);
                    c(a.removed);
                    c(a.changed);
                    a = b.getRulers();
                    for (j = 0; j < a.length; j++) b.redrawLines(k, e, a[j])
                }
            }
        };
        return {
            Ruler: b,
            AnnotationRuler: h,
            LineNumberRuler: d,
            OverviewRuler: k,
            FoldingRuler: f
        }
    });
define("orion/editor/undoStack", [],
    function () {
        function l(e, b, d) {
            this.offset = e;
            this.text = b;
            this.previousText = d
        }

        function p(e) {
            this.owner = e;
            this.changes = []
        }

        function o(e, b) {
            this.view = e;
            this.size = b !== void 0 ? b : 100;
            this.reset();
            var d = e.getModel();
            d.getBaseModel && (d = d.getBaseModel());
            this.model = d;
            var h = this;
            this._listener = {
                onChanging: function (b) {
                    h._onChanging(b)
                },
                onDestroy: function (b) {
                    h._onDestroy(b)
                }
            };
            d.addEventListener("Changing", this._listener.onChanging);
            e.addEventListener("Destroy", this._listener.onDestroy)
        }
        l.prototype = {
            undo: function (e, b) {
                this._doUndoRedo(this.offset, this.previousText, this.text, e, b);
                return !0
            },
            redo: function (e, b) {
                this._doUndoRedo(this.offset, this.text, this.previousText, e, b);
                return !0
            },
            _doUndoRedo: function (e, b, d, h, k) {
                var f = h.getModel();
                if (f.mapOffset && h.annotationModel) {
                    var a = f.mapOffset(e, !0);
                    if (a < 0)
                        for (var c = h.annotationModel.getAnnotations(e, e + 1); c.hasNext();) {
                            var i = c.next();
                            if (i.type === "orion.annotation.folding") {
                                i.expand();
                                a = f.mapOffset(e, !0);
                                break
                            }
                        }
                    if (a < 0) return;
                    e = a
                }
                f.setText(b, e, e + d.length);
                k && h.setSelection(e, e + b.length)
            }
        };
        p.prototype = {
            add: function (e) {
                this.changes.push(e)
            },
            end: function (e) {
                this.endSelection = e.getSelection();
                this.endCaret = e.getCaretOffset();
                (e = this.owner) && e.end && e.end()
            },
            undo: function (e, b) {
                this.changes.length > 1 && e.setRedraw(!1);
                for (var d = this.changes.length - 1; d >= 0; d--) this.changes[d].undo(e, !1);
                this.changes.length > 1 && e.setRedraw(!0);
                if (b) {
                    var d = this.startSelection.start,
                        h = this.startSelection.end;
                    e.setSelection(this.startCaret ? d : h, this.startCaret ? h : d)
                } (d = this.owner) && d.undo && d.undo();
                return this.changes.length > 0
            },
            redo: function (e, b) {
                this.changes.length > 1 && e.setRedraw(!1);
                for (var d = 0; d < this.changes.length; d++) this.changes[d].redo(e, !1);
                this.changes.length > 1 && e.setRedraw(!0);
                if (b) {
                    var d = this.endSelection.start,
                        h = this.endSelection.end;
                    e.setSelection(this.endCaret ? d : h, this.endCaret ? h : d)
                } (d = this.owner) && d.redo && d.redo();
                return this.changes.length > 0
            },
            start: function (e) {
                this.startSelection = e.getSelection();
                this.startCaret = e.getCaretOffset();
                (e = this.owner) && e.start && e.start()
            }
        };
        o.prototype = {
            add: function (e) {
                this.compoundChange ? this.compoundChange.add(e) : (this.stack.splice(this.index, this.stack.length - this.index, e), this.index++, this.stack.length > this.size && (this.stack.shift(), this.index--, this.cleanIndex--))
            },
            markClean: function () {
                this.endCompoundChange();
                this._commitUndo();
                this.cleanIndex = this.index
            },
            isClean: function () {
                return this.cleanIndex === this.getSize().undo
            },
            canUndo: function () {
                return this.getSize().undo > 0
            },
            canRedo: function () {
                return this.getSize().redo > 0
            },
            endCompoundChange: function () {
                this.compoundChange && this.compoundChange.end(this.view);
                this.compoundChange = void 0
            },
            getSize: function () {
                var e = this.index,
                    b = this.stack.length;
                this._undoStart !== void 0 && e++;
                return {
                    undo: e,
                    redo: b - e
                }
            },
            undo: function () {
                this._commitUndo();
                var e;
                e = !1;
                this._ignoreUndo = !0;
                do {
                    if (this.index <= 0) break;
                    e = this.stack[--this.index]
                } while (!(e = e.undo(this.view, !0)));
                this._ignoreUndo = !1;
                return e
            },
            redo: function () {
                this._commitUndo();
                var e;
                this._ignoreUndo = !0;
                do {
                    if (this.index >= this.stack.length) break;
                    e = this.stack[this.index++]
                } while (!e.redo(this.view, !0));
                this._ignoreUndo = !1;
                return !0
            },
            reset: function () {
                this.index = this.cleanIndex = 0;
                this.stack = [];
                this._undoStart = void 0;
                this._undoText = "";
                this._undoType = 0;
                this._ignoreUndo = !1;
                this._compoundChange = void 0
            },
            startCompoundChange: function (e) {
                this._commitUndo();
                e = new p(e);
                this.add(e);
                this.compoundChange = e;
                this.compoundChange.start(this.view);
                return this.compoundChange
            },
            _commitUndo: function () {
                if (this._undoStart !== void 0) this._undoType === -1 ? this.add(new l(this._undoStart, "", this._undoText)) : this.add(new l(this._undoStart, this._undoText, "")),
                    this._undoStart = void 0,
                    this._undoText = "",
                    this._undoType = 0;
                this.endCompoundChange()
            },
            _onDestroy: function () {
                this.model.removeEventListener("Changing", this._listener.onChanging);
                this.view.removeEventListener("Destroy", this._listener.onDestroy)
            },
            _onChanging: function (e) {
                var b = e.text,
                    d = e.start,
                    h = e.removedCharCount,
                    e = e.addedCharCount;
                if (!this._ignoreUndo) {
                    this._undoStart !== void 0 && !(e === 1 && h === 0 && this._undoType === 1 && d === this._undoStart + this._undoText.length || e === 0 && h === 1 && this._undoType === -1 && (d + 1 === this._undoStart || d === this._undoStart)) && this._commitUndo();
                    if (!this.compoundChange)
                        if (e === 1 && h === 0) {
                            if (this._undoStart === void 0) this._undoStart = d;
                            this._undoText += b;
                            this._undoType = 1;
                            return
                        } else if (e === 0 && h === 1) {
                            b = this._undoText.length > 0 && this._undoStart === d;
                            this._undoStart = d;
                            this._undoType = -1;
                            b ? this._undoText += this.model.getText(d, d + h) : this._undoText = this.model.getText(d, d + h) + this._undoText;
                            return
                        }
                    this.add(new l(d, b, this.model.getText(d, d + h)))
                }
            }
        };
        return {
            UndoStack: o
        }
    });
define("orion/editor/textDND", [],
    function () {
        function l(l, o) {
            this._view = l;
            this._undoStack = o;
            this._dragSelection = null;
            this._dropOffset = -1;
            this._dropText = null;
            var e = this;
            this._listener = {
                onDragStart: function (b) {
                    e._onDragStart(b)
                },
                onDragEnd: function (b) {
                    e._onDragEnd(b)
                },
                onDragEnter: function (b) {
                    e._onDragEnter(b)
                },
                onDragOver: function (b) {
                    e._onDragOver(b)
                },
                onDrop: function (b) {
                    e._onDrop(b)
                },
                onDestroy: function (b) {
                    e._onDestroy(b)
                }
            };
            l.addEventListener("DragStart", this._listener.onDragStart);
            l.addEventListener("DragEnd", this._listener.onDragEnd);
            l.addEventListener("DragEnter", this._listener.onDragEnter);
            l.addEventListener("DragOver", this._listener.onDragOver);
            l.addEventListener("Drop", this._listener.onDrop);
            l.addEventListener("Destroy", this._listener.onDestroy)
        }
        l.prototype = {
            destroy: function () {
                var l = this._view;
                if (l) l.removeEventListener("DragStart", this._listener.onDragStart),
                    l.removeEventListener("DragEnd", this._listener.onDragEnd),
                    l.removeEventListener("DragEnter", this._listener.onDragEnter),
                    l.removeEventListener("DragOver", this._listener.onDragOver),
                    l.removeEventListener("Drop", this._listener.onDrop),
                    l.removeEventListener("Destroy", this._listener.onDestroy),
                    this._view = null
            },
            _onDestroy: function () {
                this.destroy()
            },
            _onDragStart: function (l) {
                var o = this._view,
                    e = o.getSelection(),
                    o = o.getModel();
                if (o.getBaseModel) e.start = o.mapOffset(e.start),
                    e.end = o.mapOffset(e.end),
                    o = o.getBaseModel();
                if (o = o.getText(e.start, e.end)) this._dragSelection = e,
                    l.event.dataTransfer.effectAllowed = "copyMove",
                    l.event.dataTransfer.setData("Text", o)
            },
            _onDragEnd: function (l) {
                var o = this._view;
                if (this._dragSelection) {
                    this._undoStack && this._undoStack.startCompoundChange();
                    (l = l.event.dataTransfer.dropEffect === "move") && o.setText("", this._dragSelection.start, this._dragSelection.end);
                    if (this._dropText) {
                        var e = this._dropText,
                            b = this._dropOffset;
                        if (l)
                            if (b >= this._dragSelection.end) b -= this._dragSelection.end - this._dragSelection.start;
                            else if (b >= this._dragSelection.start) b = this._dragSelection.start;
                        o.setText(e, b, b);
                        o.setSelection(b, b + e.length);
                        this._dropText = null;
                        this._dropOffset = -1
                    }
                    this._undoStack && this._undoStack.endCompoundChange()
                }
                this._dragSelection = null
            },
            _onDragEnter: function (l) {
                this._onDragOver(l)
            },
            _onDragOver: function (l) {
                var o = l.event.dataTransfer.types;
                if (o) {
                    var e = !this._view.getOptions("readonly");
                    e && (e = o.contains ? o.contains("text/plain") : o.indexOf("text/plain") !== -1);
                    if (!e) l.event.dataTransfer.dropEffect = "none"
                }
            },
            _onDrop: function (l) {
                var o = this._view,
                    e = l.event.dataTransfer.getData("Text");
                if (e) l = o.getOffsetAtLocation(l.x, l.y),
                    this._dragSelection ? (this._dropOffset = l, this._dropText = e) : (o.setText(e, l, l), o.setSelection(l, l + e.length))
            }
        };
        return {
            TextDND: l
        }
    });
define("orion/editor/editor", "i18n!orion/editor/nls/messages,orion/keyBinding,orion/editor/eventTarget,orion/editor/tooltip,orion/editor/annotations,orion/util".split(","),
    function (l, p, o, e, b, d) {
        function h(b) {
            this._textViewFactory = b.textViewFactory;
            this._undoStackFactory = b.undoStackFactory;
            this._textDNDFactory = b.textDNDFactory;
            this._annotationFactory = b.annotationFactory;
            this._foldingRulerFactory = b.foldingRulerFactory;
            this._lineNumberRulerFactory = b.lineNumberRulerFactory;
            this._contentAssistFactory = b.contentAssistFactory;
            this._keyBindingFactory = b.keyBindingFactory;
            this._statusReporter = b.statusReporter;
            this._domNode = b.domNode;
            this._foldingRuler = this._overviewRuler = this._lineNumberRuler = this._annotationRuler = this._annotationModel = this._annotationStyler = null;
            this._dirty = !1;
            this._title = this._contentAssist = null
        }

        function k(b) {
            var a = this,
                c = Array.prototype.slice.call(arguments, 1);
            return c.length ?
                function () {
                    return arguments.length ? a.apply(b, c.concat(Array.prototype.slice.call(arguments))) : a.apply(b, c)
                } : function () {
                    return arguments.length ? a.apply(b, arguments) : a.call(b)
                }
        }
        h.prototype = {
            destroy: function () {
                this.uninstallTextView();
                this._textViewFactory = this._undoStackFactory = this._textDNDFactory = this._annotationFactory = this._foldingRulerFactory = this._lineNumberRulerFactory = this._contentAssistFactory = this._keyBindingFactory = this._statusReporter = this._domNode = null
            },
            getAnnotationModel: function () {
                return this._annotationModel
            },
            getAnnotationRuler: function () {
                return this._annotationRuler
            },
            getAnnotationStyler: function () {
                return this._annotationStyler
            },
            getFoldingRuler: function () {
                return this._foldingRuler
            },
            getLineNumberRuler: function () {
                return this._lineNumberRuler
            },
            getModel: function () {
                var b = this._textView.getModel();
                b.getBaseModel && (b = b.getBaseModel());
                return b
            },
            getOverviewRuler: function () {
                return this._overviewRuler
            },
            getTextView: function () {
                return this._textView
            },
            getTitle: function () {
                return this._title
            },
            getKeyModes: function () {
                return this._textView.getKeyModes()
            },
            isDirty: function () {
                return this._dirty
            },
            setAnnotationRulerVisible: function (b) {
                if (this._annotationRulerVisible !== b && (this._annotationRulerVisible = b, this._annotationRuler)) {
                    var a = this._textView;
                    b ? a.addRuler(this._annotationRuler, 0) : a.removeRuler(this._annotationRuler)
                }
            },
            setFoldingRulerVisible: function (b) {
                if (this._foldingRulerVisible !== b && (this._foldingRulerVisible = b, this._foldingRuler)) {
                    var a = this._textView;
                    a.getModel().getBaseModel && (b ? a.addRuler(this._foldingRuler, 100) : a.removeRuler(this._foldingRuler))
                }
            },
            setDirty: function (b) {
                if (this._dirty !== b) this._dirty = b,
                    this.onDirtyChanged({
                        type: "DirtyChanged"
                    })
            },
            setLineNumberRulerVisible: function (b) {
                if (this._lineNumberRulerVisible !== b && (this._lineNumberRulerVisible = b, this._lineNumberRuler)) {
                    var a = this._textView;
                    b ? a.addRuler(this._lineNumberRuler, 1) : a.removeRuler(this._lineNumberRuler)
                }
            },
            setOverviewRulerVisible: function (b) {
                if (this._overviewRulerVisible !== b && (this._overviewRulerVisible = b, this._overviewRuler)) {
                    var a = this._textView;
                    b ? a.addRuler(this._overviewRuler) : a.removeRuler(this._overviewRuler)
                }
            },
            mapOffset: function (b, a) {
                var c = this._textView.getModel();
                c.getBaseModel && (b = c.mapOffset(b, a));
                return b
            },
            getCaretOffset: function () {
                return this.mapOffset(this._textView.getCaretOffset())
            },
            getSelection: function () {
                var b = this._textView,
                    a = b.getSelection(),
                    b = b.getModel();
                if (b.getBaseModel) a.start = b.mapOffset(a.start),
                    a.end = b.mapOffset(a.end);
                return a
            },
            getText: function (b, a) {
                var c = this._textView.getModel();
                c.getBaseModel && (c = c.getBaseModel());
                return c.getText(b, a)
            },
            _expandOffset: function (d) {
                var a = this._textView.getModel(),
                    c = this._annotationModel;
                if (c && a.getBaseModel)
                    for (d = c.getAnnotations(d, d + 1); d.hasNext();) a = d.next(),
                        a.type === b.AnnotationType.ANNOTATION_FOLDING && a.expand && (a.expand(), c.modifyAnnotation(a))
            },
            setCaretOffset: function (b, a, c) {
                var d = this._textView,
                    e = d.getModel();
                e.getBaseModel && (this._expandOffset(b), b = e.mapOffset(b, !0));
                d.setCaretOffset(b, a, c)
            },
            setText: function (b, a, c) {
                var d = this._textView,
                    e = d.getModel();
                e.getBaseModel && (a !== void 0 && (this._expandOffset(a), a = e.mapOffset(a, !0)), c !== void 0 && (this._expandOffset(c), c = e.mapOffset(c, !0)));
                d.setText(b, a, c)
            },
            setFoldingEnabled: function (b) {
                this.setFoldingRulerVisible(b)
            },
            setSelection: function (b, a, c, d) {
                var e = this._textView,
                    n = e.getModel();
                n.getBaseModel && (this._expandOffset(b), this._expandOffset(a), b = n.mapOffset(b, !0), a = n.mapOffset(a, !0));
                e.setSelection(b, a, c, d)
            },
            moveSelection: function (b, a, c, d) {
                var e = this._textView;
                this.setSelection(b, a || b, 1 / 3,
                    function () {
                        (d === void 0 || d) && e.focus();
                        c && c()
                    })
            },
            checkDirty: function () {
                this.setDirty(!this._undoStack.isClean())
            },
            reportStatus: function (b, a, c) {
                this._statusReporter && this._statusReporter(b, a, c)
            },
            _getTooltipInfo: function (b, a) {
                var c = this._textView,
                    d = this.getAnnotationModel();
                if (!d) return null;
                var e = this._annotationStyler;
                if (!e) return null;
                var n = c.getOffsetAtLocation(b, a);
                if (n === -1) return null;
                n = this.mapOffset(n);
                e = e.getAnnotationsByType(d, n, n + 1);
                d = [];
                for (n = 0; n < e.length; n++) e[n].rangeStyle && d.push(e[n]);
                if (d.length === 0) return null;
                c = c.convert({
                    x: b,
                    y: a
                },
                    "document", "page");
                return {
                    contents: d,
                    anchor: "left",
                    x: c.x + 10,
                    y: c.y + 20
                }
            },
            _highlightCurrentLine: function (d, a) {
                var c = this._annotationModel;
                if (c) {
                    var i = this._textView.getModel(),
                        e = a ? i.getLineAtOffset(a.start) : -1,
                        n = i.getLineAtOffset(d.start),
                        j = d.start === d.end,
                        h = !a || a.start === a.end,
                        k = i.getLineStart(n),
                        l = i.getLineEnd(n);
                    i.getBaseModel && (k = i.mapOffset(k), l = i.mapOffset(l));
                    i = this._currentLineAnnotation;
                    if (!(e === n && h && j && i && i.start === k && i.end === l)) {
                        var e = i ? [i] : null,
                            o;
                        j && (i = b.AnnotationType.createAnnotation(b.AnnotationType.ANNOTATION_CURRENT_LINE, k, l), o = [i]);
                        this._currentLineAnnotation = i;
                        c.replaceAnnotations(e, o)
                    }
                }
            },
            installTextView: function () {
                this._textView = this._textViewFactory();
                if (this._undoStackFactory) this._undoStack = this._undoStackFactory.createUndoStack(this);
                if (this._textDNDFactory) this._textDND = this._textDNDFactory.createTextDND(this, this._undoStack);
                if (this._contentAssistFactory) this._contentAssist = this._contentAssistFactory.createContentAssistMode(this).getContentAssist();
                var d = this,
                    a = this._textView,
                    c = this;
                this._listener = {
                    onModelChanged: function () {
                        c.checkDirty()
                    },
                    onMouseOver: function (a) {
                        c._listener.onMouseMove(a)
                    },
                    onMouseMove: function (b) {
                        var d = e.Tooltip.getTooltip(a);
                        if (d && !(c._listener.lastMouseX === b.event.clientX && c._listener.lastMouseY === b.event.clientY)) c._listener.lastMouseX = b.event.clientX,
                            c._listener.lastMouseY = b.event.clientY,
                            d.setTarget({
                                x: b.x,
                                y: b.y,
                                getTooltipInfo: function () {
                                    return c._getTooltipInfo(this.x, this.y)
                                }
                            })
                    },
                    onMouseOut: function (b) {
                        var d = e.Tooltip.getTooltip(a);
                        if (d && !(c._listener.lastMouseX === b.event.clientX && c._listener.lastMouseY === b.event.clientY)) c._listener.lastMouseX = b.event.clientX,
                            c._listener.lastMouseY = b.event.clientY,
                            d.setTarget(null)
                    },
                    onScroll: function () {
                        var c = e.Tooltip.getTooltip(a);
                        c && c.setTarget(null)
                    },
                    onSelection: function (a) {
                        c._updateCursorStatus();
                        c._highlightCurrentLine(a.newValue, a.oldValue)
                    }
                };
                a.addEventListener("ModelChanged", this._listener.onModelChanged);
                a.addEventListener("Selection", this._listener.onSelection);
                a.addEventListener("MouseOver", this._listener.onMouseOver);
                a.addEventListener("MouseOut", this._listener.onMouseOut);
                a.addEventListener("MouseMove", this._listener.onMouseMove);
                a.addEventListener("Scroll", this._listener.onScroll);
                this._keyBindingFactory && (typeof this._keyBindingFactory === "function" ? this._keyBindingFactory(this, this.getKeyModes(), this._undoStack, this._contentAssist) : this._keyBindingFactory.createKeyBindings(d, this._undoStack, this._contentAssist));
                var i = function (a) {
                    if (a !== void 0 && a !== -1) {
                        for (var c = this.getView().getModel(), i = this.getAnnotationModel(), e = d.mapOffset(c.getLineStart(a)), a = d.mapOffset(c.getLineEnd(a)), c = i.getAnnotations(e, a), m = null; c.hasNext();) {
                            var g = c.next();
                            if (g.type === b.AnnotationType.ANNOTATION_BOOKMARK) {
                                m = g;
                                break
                            }
                        }
                        m ? i.removeAnnotation(m) : (m = b.AnnotationType.createAnnotation(b.AnnotationType.ANNOTATION_BOOKMARK, e, a), m.title = void 0, i.addAnnotation(m))
                    }
                };
                if (this._annotationFactory) {
                    var m = a.getModel();
                    m.getBaseModel && (m = m.getBaseModel());
                    if (this._annotationModel = this._annotationFactory.createAnnotationModel(m))
                        if (m = this._annotationStyler = this._annotationFactory.createAnnotationStyler(a, this._annotationModel)) m.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_SEARCH),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_MATCHING_SEARCH),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_ERROR),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_WARNING),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_MATCHING_BRACKET),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_BRACKET),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_LINE),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_READ_OCCURRENCE),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_WRITE_OCCURRENCE),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_SELECTED_LINKED_GROUP),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_LINKED_GROUP),
                            m.addAnnotationType(b.AnnotationType.ANNOTATION_LINKED_GROUP),
                            m.addAnnotationType("orion.annotation.highlightError");
                    a.annotationModel = this._annotationModel;
                    var m = this._annotationFactory.createAnnotationRulers(this._annotationModel),
                        n = this._annotationRuler = m.annotationRuler;
                    if (n) n.onDblClick = i,
                        n.setMultiAnnotationOverlay({
                            html: "<div class='annotationHTML overlay'></div>"
                        }),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_ERROR),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_WARNING),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_TASK),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_BOOKMARK);
                    this.setAnnotationRulerVisible(!0);
                    if (n = this._overviewRuler = m.overviewRuler) n.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_SEARCH),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_MATCHING_SEARCH),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_ERROR),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_WARNING),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_TASK),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_BOOKMARK),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_MATCHING_BRACKET),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_BRACKET),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_CURRENT_LINE),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_READ_OCCURRENCE),
                        n.addAnnotationType(b.AnnotationType.ANNOTATION_WRITE_OCCURRENCE);
                    this.setOverviewRulerVisible(!0)
                }
                if (this._lineNumberRulerFactory) this._lineNumberRuler = this._lineNumberRulerFactory.createLineNumberRuler(this._annotationModel),
                    this._lineNumberRuler.onDblClick = i,
                    this.setLineNumberRulerVisible(!0);
                if (this._foldingRulerFactory) this._foldingRuler = this._foldingRulerFactory.createFoldingRuler(this._annotationModel),
                    this._foldingRuler.addAnnotationType(b.AnnotationType.ANNOTATION_FOLDING),
                    this.setFoldingRulerVisible(!1);
                this.dispatchEvent({
                    type: "TextViewInstalled",
                    textView: a
                })
            },
            uninstallTextView: function () {
                var b = this._textView;
                if (b) b.destroy(),
                    this._textView = this._undoStack = this._textDND = this._contentAssist = this._listener = this._annotationModel = this._annotationStyler = this._annotationRuler = this._overviewRuler = this._lineNumberRuler = this._foldingRuler = this._currentLineAnnotation = this._title = null,
                    this._dirty = !1,
                    this.dispatchEvent({
                        type: "TextViewUninstalled",
                        textView: b
                    })
            },
            _updateCursorStatus: function () {
                var b = this.getModel(),
                    a = this.getCaretOffset(),
                    c = b.getLineAtOffset(a),
                    b = b.getLineStart(c);
                a -= b;
                for (var b = this.getKeyModes(), i = 0; i < b.length; i++) {
                    var e = b[i];
                    if (e.isActive() && e.isStatusActive && e.isStatusActive()) return
                }
                this.reportStatus(d.formatMessage(l.lineColumn, c + 1, a + 1))
            },
            showProblems: function (d) {
                var a = this._annotationModel;
                if (a) {
                    for (var c = [], i = [], e = a.getTextModel(), n = a.getAnnotations(0, e.getCharCount()), j; n.hasNext();) j = n.next(),
                        (j.type === b.AnnotationType.ANNOTATION_ERROR || j.type === b.AnnotationType.ANNOTATION_WARNING) && c.push(j);
                    if (d)
                        for (n = 0; n < d.length; n++)
                            if (j = d[n]) {
                                var h = j.description.replace(/'/g, "&#39;").replace(/"/g, "&#34;"),
                                    k = e.getLineStart(j.line - 1);
                                j = b.AnnotationType.createAnnotation(j.severity === "error" ? b.AnnotationType.ANNOTATION_ERROR : b.AnnotationType.ANNOTATION_WARNING, k + j.start - 1, k + j.end, h);
                                i.push(j)
                            }
                    a.replaceAnnotations(c, i)
                }
            },
            showOccurrences: function (d) {
                var a = this._annotationModel;
                if (a) {
                    for (var c = [], i = [], e = a.getTextModel(), n = a.getAnnotations(0, e.getCharCount()), j; n.hasNext();) j = n.next(),
                        (j.type === b.AnnotationType.ANNOTATION_READ_OCCURRENCE || j.type === b.AnnotationType.ANNOTATION_WRITE_OCCURRENCE) && c.push(j);
                    if (d)
                        for (n = 0; n < d.length; n++)
                            if (j = d[n]) {
                                var h = e.getLineStart(j.line - 1);
                                j = b.AnnotationType.createAnnotation(j.readAccess === !0 ? b.AnnotationType.ANNOTATION_READ_OCCURRENCE : b.AnnotationType.ANNOTATION_WRITE_OCCURRENCE, h + j.start - 1, h + j.end, j.description);
                                i.push(j)
                            }
                    a.replaceAnnotations(c, i)
                }
            },
            showSelection: function (b, a, c, d, e) {
                typeof b === "number" ? (typeof a !== "number" && (a = b), this.moveSelection(b, a)) : typeof c === "number" && (b = this.getModel().getLineStart(c - 1), typeof d === "number" && (b += d), typeof e !== "number" && (e = 0), this.moveSelection(b, b + e))
            },
            setInput: function (b, a, c, d) {
                this._title = b;
                this._textView && (d ? (this._undoStack.markClean(), this.checkDirty()) : (a ? this._textView.setText(a) : c !== null && c !== void 0 && (this._textView.setText(c), this._textView.getModel().setLineDelimiter("auto"), this._highlightCurrentLine(this._textView.getSelection())), this._undoStack.reset(), this.checkDirty(), this._textView.focus()));
                this.onInputChanged({
                    type: "InputChanged",
                    title: b,
                    message: a,
                    contents: c,
                    contentsSaved: d
                })
            },
            onInputChanged: function (b) {
                return this.dispatchEvent(b)
            },
            onGotoLine: function (b, a, c, d) {
                if (this._textView) {
                    var e = this.getModel(),
                        b = Math.max(0, Math.min(b, e.getLineCount() - 1)),
                        n = e.getLineStart(b),
                        j = 0;
                    c === void 0 && (c = 0);
                    typeof a === "string" ? (b = e.getLine(b).indexOf(a), b !== -1 && (j = b, c = j + a.length)) : (j = a, a = e.getLineEnd(b) - n, j = Math.min(j, a), c = Math.min(c, a));
                    this.moveSelection(n + j, n + c, d)
                }
            },
            onDirtyChanged: function (b) {
                return this.dispatchEvent(b)
            }
        };
        o.EventTarget.addMixin(h.prototype);
        if (!Function.prototype.bind) Function.prototype.bind = k;
        return {
            Editor: h
        }
    });
define("orion/editor/regex", [],
    function () {
        return {
            escape: function (l) {
                return l.replace(/([\\$\^*\/+?\.\(\)|{}\[\]])/g, "\\$&")
            },
            parse: function (l) {
                return (l = /^\s*\/(.+)\/([gim]{0,3})\s*$/.exec(l)) ? {
                    pattern: l[1],
                    flags: l[2]
                } : null
            }
        }
    });
define("orion/objects", [],
    function () {
        return {
            mixin: function (l) {
                Array.prototype.slice.call(arguments, 1).forEach(function (p) {
                    for (var o = Object.keys(p), e = 0; e < o.length; e++) {
                        var b = o[e];
                        l[b] = p[b]
                    }
                })
            }
        }
    });
define("orion/editor/find", "i18n!orion/editor/nls/messages,orion/keyBinding,orion/editor/keyModes,orion/editor/annotations,orion/editor/regex,orion/objects,orion/util".split(","),
    function (l, p, o, e, b, d, h) {
        function k(a) {
            var d = a.getTextView();
            o.KeyMode.call(this, d);
            this.editor = a;
            this._active = !1;
            this._success = !0;
            this._ignoreSelection = !1;
            this._prefix = "";
            d.setAction("incrementalFindCancel",
                function () {
                    this.setActive(!1);
                    return !0
                }.bind(this));
            d.setAction("incrementalFindBackspace",
                function () {
                    return this._backspace()
                }.bind(this));
            var f = this;
            this._listener = {
                onVerify: function (a) {
                    var c = f.editor,
                        d = c.getModel(),
                        i = c.mapOffset(a.start),
                        c = c.mapOffset(a.end),
                        d = d.getText(i, c);
                    if ((d = f._prefix.match(RegExp("^" + b.escape(d), "i"))) && d.length > 0) f._prefix += a.text,
                        f._success = !0,
                        f._status(),
                        f.find(f._forward, !0),
                        a.text = null
                },
                onSelection: function () {
                    f._ignoreSelection || f.setActive(!1)
                }
            }
        }

        function f(a, b, d) {
            if (a) {
                this._editor = a;
                this._undoStack = b;
                this._showAll = !0;
                this._visible = !1;
                this._wrap = this._caseInsensitive = !0;
                this._wholeWord = !1;
                this._incremental = !0;
                this._regex = !1;
                this._findAfterReplace = !0;
                this._reverse = this._hideAfterFind = !1;
                this._timer = this._end = this._start = void 0;
                this._lastString = "";
                var f = this;
                this._listeners = {
                    onEditorFocus: function (a) {
                        f._removeCurrentAnnotation(a)
                    }
                };
                this.setOptions(d)
            }
        }
        var a = {};
        k.prototype = new o.KeyMode;
        d.mixin(k.prototype, {
            createKeyBindings: function () {
                var a = p.KeyBinding,
                    b = [];
                b.push({
                    actionID: "incrementalFindBackspace",
                    keyBinding: new a(8)
                });
                b.push({
                    actionID: "incrementalFindCancel",
                    keyBinding: new a(13)
                });
                b.push({
                    actionID: "incrementalFindCancel",
                    keyBinding: new a(27)
                });
                b.push({
                    actionID: "incrementalFindReverse",
                    keyBinding: new a(38)
                });
                b.push({
                    actionID: "incrementalFind",
                    keyBinding: new a(40)
                });
                b.push({
                    actionID: "incrementalFindReverse",
                    keyBinding: new a("k", !0, !0)
                });
                b.push({
                    actionID: "incrementalFind",
                    keyBinding: new a("k", !0)
                });
                return b
            },
            find: function (a, b) {
                this._forward = a;
                if (!this.isActive()) return this.setActive(!0),
                    !1;
                var d = this._prefix;
                if (d.length === 0) return !1;
                var f = this.editor,
                    e = f.getModel(),
                    e = a ? this._success ? b ? this._start : f.getCaretOffset() + 1 : 0 : this._success ? b ? this._start : f.getCaretOffset() : e.getCharCount() - 1;
                if (d = f.getModel().find({
                    string: d,
                    start: e,
                    reverse: !a,
                    caseInsensitive: d.toLowerCase() === d
                }).next()) {
                    if (!b) this._start = e;
                    this._ignoreSelection = this._success = !0;
                    f.moveSelection(a ? d.start : d.end, a ? d.end : d.start);
                    this._ignoreSelection = !1
                } else this._success = !1;
                this._status();
                return !0
            },
            isActive: function () {
                return this._active
            },
            isStatusActive: function () {
                return this.isActive()
            },
            setActive: function (a) {
                if (this._active !== a) this._active = a,
                    this._prefix = "",
                    this._success = !0,
                    a = this.editor.getTextView(),
                    this._start = this.editor.getCaretOffset(),
                    this.editor.setCaretOffset(this._start),
                    this._active ? (a.addEventListener("Verify", this._listener.onVerify), a.addEventListener("Selection", this._listener.onSelection), a.addKeyMode(this)) : (a.removeEventListener("Verify", this._listener.onVerify), a.removeEventListener("Selection", this._listener.onSelection), a.removeKeyMode(this)),
                    this._status()
            },
            _backspace: function () {
                var a = this._prefix,
                    a = this._prefix = a.substring(0, a.length - 1);
                return a.length === 0 ? (this._ignoreSelection = this._success = !0, this.editor.setCaretOffset(this.editor.getSelection().start), this._ignoreSelection = !1, this._status(), !0) : this.find(this._forward, !0)
            },
            _status: function () {
                if (this.isActive()) {
                    var a;
                    a = this._forward ? this._success ? l.incrementalFindStr : l.incrementalFindStrNotFound : this._success ? l.incrementalFindReverseStr : l.incrementalFindReverseStrNotFound;
                    a = h.formatMessage(a, this._prefix);
                    this.editor.reportStatus(a, this._success ? "" : "error")
                } else this.editor.reportStatus("")
            }
        });
        a.IncrementalFind = k;
        f.prototype = {
            find: function (a, b, d) {
                this.setOptions({
                    reverse: !a
                });
                var f = this.getFindString(),
                    e;
                if (b) f = b.findString || f,
                    e = b.count;
                a = this.getOptions();
                this.setOptions(b);
                b = d ? this._startOffset : this.getStartOffset();
                if ((e = this._doFind(f, b, e)) && !d) this._startOffset = e.start;
                this.setOptions(a);
                this._hideAfterFind && this.hide();
                return e
            },
            getStartOffset: function () {
                return this._start !== void 0 ? this._start : this._reverse ? this._editor.getSelection().start - 1 : this._editor.getCaretOffset()
            },
            getFindString: function () {
                var a = this._editor.getSelection();
                return this._editor.getText(a.start, a.end) || this._lastString
            },
            getOptions: function () {
                return {
                    showAll: this._showAll,
                    caseInsensitive: this._caseInsensitive,
                    wrap: this._wrap,
                    wholeWord: this._wholeWord,
                    incremental: this._incremental,
                    regex: this._regex,
                    findAfterReplace: this._findAfterReplace,
                    hideAfterFind: this._hideAfterFind,
                    reverse: this._reverse,
                    findCallback: this._findCallback,
                    start: this._start,
                    end: this._end
                }
            },
            getReplaceString: function () {
                return ""
            },
            hide: function () {
                this._visible = !1;
                if (this._savedOptions && (this.setOptions(this._savedOptions.pop()), this._savedOptions.length === 0)) this._savedOptions = null;
                this._removeAllAnnotations();
                this._editor.getTextView().removeEventListener("Focus", this._listeners.onEditorFocus);
                this._editor.getTextView().focus()
            },
            isVisible: function () {
                return this._visible
            },
            replace: function () {
                var a = this.getFindString();
                if (a) {
                    var b = this._editor,
                        d = this.getReplaceString(),
                        f = b.getSelection().start;
                    if (b = b.getModel().find({
                        string: a,
                        start: f,
                        reverse: !1,
                        wrap: this._wrap,
                        regex: this._regex,
                        wholeWord: this._wholeWord,
                        caseInsensitive: this._caseInsensitive
                    }).next()) this.startUndo(),
                        this._doReplace(b.start, b.end, a, d),
                        this.endUndo()
                }
                this._findAfterReplace && a && this._doFind(a, this.getStartOffset())
            },
            replaceAll: function () {
                var a = this.getFindString();
                if (a) {
                    this._replacingAll = !0;
                    var b = this._editor,
                        d = b.getTextView();
                    b.reportStatus(l.replaceAll);
                    var f = this.getReplaceString(),
                        e = this;
                    window.setTimeout(function () {
                        for (var k = 0,
                            r = 0; ;) {
                            var o = e._doFind(a, k);
                            if (!o) break;
                            r++;
                            r === 1 && (d.setRedraw(!1), e.startUndo());
                            e._doReplace(o.start, o.end, a, f);
                            k = e.getStartOffset()
                        }
                        r > 0 && (e.endUndo(), d.setRedraw(!0));
                        k > 0 ? b.reportStatus(h.formatMessage(l.replacedMatches, r)) : b.reportStatus(l.nothingReplaced, "error");
                        e._replacingAll = !1
                    },
                        100)
                }
            },
            setOptions: function (a) {
                if (a) {
                    if ((a.showAll === !0 || a.showAll === !1) && this._showAll !== a.showAll)
                        if (this._showAll = a.showAll, this.isVisible())
                            if (this._showAll) this._markAllOccurrences();
                            else {
                                var b = this._editor.getAnnotationModel();
                                b && b.removeAnnotations(e.AnnotationType.ANNOTATION_MATCHING_SEARCH)
                            }
                    if (a.caseInsensitive === !0 || a.caseInsensitive === !1) this._caseInsensitive = a.caseInsensitive;
                    if (a.wrap === !0 || a.wrap === !1) this._wrap = a.wrap;
                    if (a.wholeWord === !0 || a.wholeWord === !1) this._wholeWord = a.wholeWord;
                    if (a.incremental === !0 || a.incremental === !1) this._incremental = a.incremental;
                    if (a.regex === !0 || a.regex === !1) this._regex = a.regex;
                    if (a.findAfterReplace === !0 || a.findAfterReplace === !1) this._findAfterReplace = a.findAfterReplace;
                    if (a.hideAfterFind === !0 || a.hideAfterFind === !1) this._hideAfterFind = a.hideAfterFind;
                    if (a.reverse === !0 || a.reverse === !1) this._reverse = a.reverse;
                    if (a.hasOwnProperty("findCallback")) this._findCallback = a.findCallback;
                    if (a.hasOwnProperty("start")) this._start = a.start;
                    if (a.hasOwnProperty("end")) this._end = a.end
                }
            },
            show: function (a) {
                this._visible = !0;
                if (a) {
                    if (!this._savedOptions) this._savedOptions = [];
                    this._savedOptions.push(this.getOptions());
                    this.setOptions(a)
                }
                this._startOffset = this._editor.getSelection().start;
                this._editor.getTextView().addEventListener("Focus", this._listeners.onEditorFocus);
                var b = this;
                window.setTimeout(function () {
                    b._incremental && b.find(!0, null, !0)
                },
                    0)
            },
            startUndo: function () {
                this._undoStack && this._undoStack.startCompoundChange()
            },
            endUndo: function () {
                this._undoStack && this._undoStack.endCompoundChange()
            },
            _doFind: function (a, b, d) {
                var d = d || 1,
                    f = this._editor;
                if (!a) return this._removeAllAnnotations(),
                    null;
                this._lastString = a;
                for (var a = f.getModel().find({
                    string: a,
                    start: b,
                    end: this._end,
                    reverse: this._reverse,
                    wrap: this._wrap,
                    regex: this._regex,
                    wholeWord: this._wholeWord,
                    caseInsensitive: this._caseInsensitive
                }), j, b = 0; b < d && a.hasNext(); b++) j = a.next();
                if (!this._replacingAll) {
                    j ? this._editor.reportStatus("") : this._editor.reportStatus(l.notFound, "error");
                    if (this.isVisible()) {
                        d = e.AnnotationType.ANNOTATION_CURRENT_SEARCH;
                        if (a = f.getAnnotationModel()) a.removeAnnotations(d),
                            j && a.addAnnotation(e.AnnotationType.createAnnotation(d, j.start, j.end));
                        if (this._showAll) {
                            this._timer && window.clearTimeout(this._timer);
                            var h = this;
                            this._timer = window.setTimeout(function () {
                                h._markAllOccurrences();
                                h._timer = null
                            },
                                500)
                        }
                    }
                    this._findCallback ? this._findCallback(j) : j && f.moveSelection(j.start, j.end, null, !1)
                }
                return j
            },
            _doReplace: function (a, b, d, f) {
                var e = this._editor;
                if (this._regex && (f = e.getText(a, b).replace(RegExp(d, this._caseInsensitive ? "i" : ""), f), !f)) return;
                e.setText(f, a, b);
                e.setSelection(a, a + f.length, !0)
            },
            _markAllOccurrences: function () {
                var a = this._editor.getAnnotationModel();
                if (a) {
                    for (var b = e.AnnotationType.ANNOTATION_MATCHING_SEARCH,
                        d = a.getAnnotations(0, a.getTextModel().getCharCount()), f = [], j; d.hasNext();) {
                        var h = d.next();
                        h.type === b && f.push(h)
                    }
                    if (this.isVisible()) {
                        d = this.getFindString();
                        d = this._editor.getModel().find({
                            string: d,
                            regex: this._regex,
                            wholeWord: this._wholeWord,
                            caseInsensitive: this._caseInsensitive
                        });
                        for (j = []; d.hasNext();) h = d.next(),
                            j.push(e.AnnotationType.createAnnotation(b, h.start, h.end))
                    }
                    a.replaceAnnotations(f, j)
                }
            },
            _removeAllAnnotations: function () {
                var a = this._editor.getAnnotationModel();
                a && (a.removeAnnotations(e.AnnotationType.ANNOTATION_CURRENT_SEARCH), a.removeAnnotations(e.AnnotationType.ANNOTATION_MATCHING_SEARCH))
            },
            _removeCurrentAnnotation: function () {
                var a = this._editor.getAnnotationModel();
                a && a.removeAnnotations(e.AnnotationType.ANNOTATION_CURRENT_SEARCH)
            }
        };
        a.Find = f;
        return a
    });
define("orion/editor/actions", "i18n!orion/editor/nls/messages,orion/keyBinding,orion/editor/annotations,orion/editor/tooltip,orion/editor/find,orion/util".split(","),
    function (l, p, o, e, b, d) {
        function h(a, c, d) {
            this.editor = a;
            this.undoStack = c;
            this._incrementalFind = new b.IncrementalFind(a);
            this._find = d ? d : new b.Find(a, c);
            this._lastEditLocation = null;
            this.init()
        }

        function k(a, c, b, d) {
            this.editor = a;
            this.undoStack = c;
            this.contentAssist = b;
            this.linkedMode = d;
            this.contentAssist && this.contentAssist.addEventListener("ProposalApplied", this.contentAssistProposalApplied.bind(this));
            this.init()
        }
        var f = {};
        h.prototype = {
            init: function () {
                var a = this.editor.getTextView();
                this._lastEditListener = {
                    onModelChanged: function (a) {
                        if (this.editor.isDirty()) this._lastEditLocation = a.start + a.addedCharCount
                    }.bind(this)
                };
                a.addEventListener("ModelChanged", this._lastEditListener.onModelChanged);
                a.setAction("undo",
                    function () {
                        return this.undoStack ? (this.undoStack.undo(), !0) : !1
                    }.bind(this), {
                    name: l.undo
                });
                a.setAction("redo",
                    function () {
                        return this.undoStack ? (this.undoStack.redo(), !0) : !1
                    }.bind(this), {
                    name: l.redo
                });
                a.setKeyBinding(new p.KeyBinding("f", !0), "find");
                a.setAction("find",
                    function () {
                        if (this._find) {
                            var a = this.editor.getSelection();
                            (a = prompt(l.find, this.editor.getText(a.start, a.end))) && this._find.find(!0, {
                                findString: a
                            })
                        }
                    }.bind(this), {
                    name: l.find
                });
                a.setKeyBinding(new p.KeyBinding("k", !0), "findNext");
                a.setAction("findNext",
                    function (a) {
                        return this._find ? (this._find.find(!0, a), !0) : !1
                    }.bind(this), {
                    name: l.findNext
                });
                a.setKeyBinding(new p.KeyBinding("k", !0, !0), "findPrevious");
                a.setAction("findPrevious",
                    function (a) {
                        return this._find ? (this._find.find(!1, a), !0) : !1
                    }.bind(this), {
                    name: l.findPrevious
                });
                a.setKeyBinding(new p.KeyBinding("j", !0), "incrementalFind");
                a.setAction("incrementalFind",
                    function () {
                        this._incrementalFind && this._incrementalFind.find(!0);
                        return !0
                    }.bind(this), {
                    name: l.incrementalFind
                });
                a.setKeyBinding(new p.KeyBinding("j", !0, !0), "incrementalFindReverse");
                a.setAction("incrementalFindReverse",
                    function () {
                        this._incrementalFind && this._incrementalFind.find(!1);
                        return !0
                    }.bind(this), {
                    name: l.incrementalFindReverse
                });
                a.setAction("tab",
                    function () {
                        return this.indentLines()
                    }.bind(this));
                a.setAction("shiftTab",
                    function () {
                        return this.unindentLines()
                    }.bind(this), {
                    name: l.unindentLines
                });
                a.setKeyBinding(new p.KeyBinding(38, !1, !1, !0), "moveLinesUp");
                a.setAction("moveLinesUp",
                    function () {
                        return this.moveLinesUp()
                    }.bind(this), {
                    name: l.moveLinesUp
                });
                a.setKeyBinding(new p.KeyBinding(40, !1, !1, !0), "moveLinesDown");
                a.setAction("moveLinesDown",
                    function () {
                        return this.moveLinesDown()
                    }.bind(this), {
                    name: l.moveLinesDown
                });
                a.setKeyBinding(new p.KeyBinding(38, !0, !1, !0), "copyLinesUp");
                a.setAction("copyLinesUp",
                    function () {
                        return this.copyLinesUp()
                    }.bind(this), {
                    name: l.copyLinesUp
                });
                a.setKeyBinding(new p.KeyBinding(40, !0, !1, !0), "copyLinesDown");
                a.setAction("copyLinesDown",
                    function () {
                        return this.copyLinesDown()
                    }.bind(this), {
                    name: l.copyLinesDown
                });
                a.setKeyBinding(new p.KeyBinding("d", !0, !1, !1), "deleteLines");
                a.setAction("deleteLines",
                    function (a) {
                        return this.deleteLines(a)
                    }.bind(this), {
                    name: l.deleteLines
                });
                a.setKeyBinding(new p.KeyBinding("l", !d.isMac, !1, !1, d.isMac), "gotoLine");
                a.setAction("gotoLine",
                    function () {
                        return this.gotoLine()
                    }.bind(this), {
                    name: l.gotoLine
                });
                a.setKeyBinding(new p.KeyBinding(190, !0), "nextAnnotation");
                a.setAction("nextAnnotation",
                    function () {
                        return this.nextAnnotation(!0)
                    }.bind(this), {
                    name: l.nextAnnotation
                });
                a.setKeyBinding(new p.KeyBinding(188, !0), "previousAnnotation");
                a.setAction("previousAnnotation",
                    function () {
                        return this.nextAnnotation(!1)
                    }.bind(this), {
                    name: l.prevAnnotation
                });
                a.setKeyBinding(new p.KeyBinding("e", !0, !1, !0, !1), "expand");
                a.setAction("expand",
                    function () {
                        return this.expandAnnotation(!0)
                    }.bind(this), {
                    name: l.expand
                });
                a.setKeyBinding(new p.KeyBinding("c", !0, !1, !0, !1), "collapse");
                a.setAction("collapse",
                    function () {
                        return this.expandAnnotation(!1)
                    }.bind(this), {
                    name: l.collapse
                });
                a.setKeyBinding(new p.KeyBinding("e", !0, !0, !0, !1), "expandAll");
                a.setAction("expandAll",
                    function () {
                        return this.expandAnnotations(!0)
                    }.bind(this), {
                    name: l.expandAll
                });
                a.setKeyBinding(new p.KeyBinding("c", !0, !0, !0, !1), "collapseAll");
                a.setAction("collapseAll",
                    function () {
                        return this.expandAnnotations(!1)
                    }.bind(this), {
                    name: l.collapseAll
                });
                a.setKeyBinding(new p.KeyBinding("q", !d.isMac, !1, !1, d.isMac), "lastEdit");
                a.setAction("lastEdit",
                    function () {
                        return this.gotoLastEdit()
                    }.bind(this), {
                    name: l.lastEdit
                })
            },
            copyLinesDown: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var c = a.getModel(),
                    b = a.getSelection(),
                    d = c.getLineAtOffset(b.start),
                    b = c.getLineAtOffset(b.end > b.start ? b.end - 1 : b.end),
                    f = c.getLineStart(d),
                    d = c.getLineEnd(b, !0),
                    e = c.getLineCount(),
                    h = "",
                    f = c.getText(f, d);
                b === e - 1 && (f = (h = c.getLineDelimiter()) + f);
                a.setText(f, d, d);
                a.setSelection(d + h.length, d + f.length);
                return !0
            },
            copyLinesUp: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var c = a.getModel(),
                    b = a.getSelection(),
                    d = c.getLineAtOffset(b.start),
                    b = c.getLineAtOffset(b.end > b.start ? b.end - 1 : b.end),
                    d = c.getLineStart(d),
                    f = c.getLineEnd(b, !0),
                    e = c.getLineCount(),
                    h = "",
                    f = c.getText(d, f);
                b === e - 1 && (f += h = c.getLineDelimiter());
                a.setText(f, d, d);
                a.setSelection(d, d + f.length - h.length);
                return !0
            },
            deleteLines: function (a) {
                var b = this.editor;
                if (b.getTextView().getOptions("readonly")) return !1;
                var d = 1;
                if (a && a.count) d = a.count;
                var f = b.getSelection(),
                    e = b.getModel(),
                    j = e.getLineAtOffset(f.start),
                    a = e.getLineStart(j),
                    d = f.start !== f.end || d === 1 ? e.getLineAtOffset(f.end > f.start ? f.end - 1 : f.end) : Math.min(j + d - 1, e.getLineCount() - 1),
                    d = e.getLineEnd(d, !0);
                b.setText("", a, d);
                return !0
            },
            expandAnnotation: function (a) {
                var b = this.editor,
                    d = b.getAnnotationModel();
                if (!d) return !0;
                var f = b.getModel(),
                    e = b.getCaretOffset(),
                    j = f.getLineAtOffset(e),
                    e = f.getLineStart(j),
                    j = f.getLineEnd(j, !0);
                f.getBaseModel && (e = f.mapOffset(e), j = f.mapOffset(j), f.getBaseModel());
                for (var h, f = d.getAnnotations(e, j); !h && f.hasNext();) e = f.next(),
                    e.type === o.AnnotationType.ANNOTATION_FOLDING && (h = e);
                h && a !== h.expanded && (a ? h.expand() : (b.setCaretOffset(h.start), h.collapse()), d.modifyAnnotation(h));
                return !0
            },
            expandAnnotations: function (a) {
                var b = this.editor,
                    d = b.getTextView(),
                    f = b.getAnnotationModel();
                if (!f) return !0;
                var b = b.getModel(),
                    e = f.getAnnotations(0, b.getCharCount());
                for (d.setRedraw(!1); e.hasNext();) b = e.next(),
                    b.type === o.AnnotationType.ANNOTATION_FOLDING && a !== b.expanded && (a ? b.expand() : b.collapse(), f.modifyAnnotation(b));
                d.setRedraw(!0);
                return !0
            },
            indentLines: function () {
                var a = this.editor,
                    b = a.getTextView();
                if (b.getOptions("readonly")) return !1;
                if (b.getOptions("tabMode")) {
                    var d = a.getModel(),
                        f = a.getSelection(),
                        e = d.getLineAtOffset(f.start),
                        j = d.getLineAtOffset(f.end > f.start ? f.end - 1 : f.end);
                    if (e !== j) {
                        var h = [];
                        h.push("");
                        for (var k = e; k <= j; k++) h.push(d.getLine(k, !0));
                        k = d.getLineStart(e);
                        d = d.getLineEnd(j, !0);
                        b = b.getOptions("tabSize", "expandTab");
                        b = b.expandTab ? Array(b.tabSize + 1).join(" ") : "\t";
                        a.setText(h.join(b), k, d);
                        a.setSelection(k === f.start ? f.start : f.start + b.length, f.end + (j - e + 1) * b.length);
                        return !0
                    }
                    return !1
                }
            },
            gotoLastEdit: function () {
                typeof this._lastEditLocation === "number" && this.editor.showSelection(this._lastEditLocation);
                return !0
            },
            gotoLine: function () {
                var a = this.editor,
                    b = a.getModel().getLineAtOffset(a.getCaretOffset());
                if (b = prompt(l.gotoLinePrompty, b + 1)) b = parseInt(b, 10),
                    a.onGotoLine(b - 1, 0);
                return !0
            },
            moveLinesDown: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var b = a.getModel(),
                    d = a.getSelection(),
                    f = b.getLineAtOffset(d.start),
                    e = b.getLineAtOffset(d.end > d.start ? d.end - 1 : d.end),
                    j = b.getLineCount();
                if (e === j - 1) return !0;
                var f = b.getLineStart(f),
                    d = b.getLineEnd(e, !0),
                    h = b.getLineEnd(e + 1, !0) - (d - f),
                    k = 0;
                e !== j - 2 ? b = b.getText(f, d) : (e = b.getLineEnd(e), b = b.getText(e, d) + b.getText(f, e), k += d - e);
                this.startUndo();
                a.setText("", f, d);
                a.setText(b, h, h);
                a.setSelection(h + k, h + k + b.length);
                this.endUndo();
                return !0
            },
            moveLinesUp: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var b = a.getModel(),
                    d = a.getSelection(),
                    f = b.getLineAtOffset(d.start);
                if (f === 0) return !0;
                var e = b.getLineAtOffset(d.end > d.start ? d.end - 1 : d.end),
                    j = b.getLineCount(),
                    d = b.getLineStart(f - 1),
                    h = b.getLineStart(f),
                    k = b.getLineEnd(e, !0),
                    l = b.getText(h, k),
                    o = 0;
                e === j - 1 && (e = b.getLineEnd(f - 1), f = b.getLineEnd(f - 1, !0), l += b.getText(e, f), h = e, o = f - e);
                this.startUndo();
                a.setText("", h, k);
                a.setText(l, d, d);
                a.setSelection(d, d + l.length - o);
                this.endUndo();
                return !0
            },
            nextAnnotation: function (a) {
                var b = this.editor,
                    d = b.getAnnotationModel();
                if (!d) return !0;
                for (var f = b.getModel(), h = b.getCaretOffset(), d = d.getAnnotations(a ? h : 0, a ? f.getCharCount() : h), j = null; d.hasNext();) {
                    var k = d.next();
                    if (a) {
                        if (k.start <= h) continue
                    } else if (k.start >= h) continue;
                    switch (k.type) {
                        case o.AnnotationType.ANNOTATION_ERROR:
                        case o.AnnotationType.ANNOTATION_WARNING:
                        case o.AnnotationType.ANNOTATION_TASK:
                        case o.AnnotationType.ANNOTATION_BOOKMARK:
                            break;
                        default:
                            continue
                    }
                    j = k;
                    if (a) break
                }
                if (j) {
                    var l = b.getTextView(),
                        t = f.getLineAtOffset(j.start),
                        p = e.Tooltip.getTooltip(l);
                    if (!p) return b.moveSelection(j.start),
                        !0;
                    b.moveSelection(j.start, j.start,
                        function () {
                            p.setTarget({
                                getTooltipInfo: function () {
                                    var a = l.convert({
                                        x: l.getLocationAtOffset(j.start).x,
                                        y: l.getLocationAtOffset(f.getLineStart(t)).y
                                    },
                                        "document", "page");
                                    return {
                                        contents: [j],
                                        x: a.x,
                                        y: a.y + Math.floor(l.getLineHeight(t) * 1.33)
                                    }
                                }
                            },
                                0)
                        })
                }
                return !0
            },
            unindentLines: function () {
                var a = this.editor,
                    b = a.getTextView();
                if (b.getOptions("readonly")) return !1;
                if (b.getOptions("tabMode")) {
                    for (var d = a.getModel(), f = a.getSelection(), e = d.getLineAtOffset(f.start), j = d.getLineAtOffset(f.end > f.start ? f.end - 1 : f.end), h = b.getOptions("tabSize"), k = Array(h + 1).join(" "), l = [], o = b = 0, g = e; g <= j; g++) {
                        var p = d.getLine(g, !0);
                        if (d.getLineStart(g) !== d.getLineEnd(g))
                            if (p.indexOf("\t") === 0) p = p.substring(1),
                                b++;
                            else if (p.indexOf(k) === 0) p = p.substring(h),
                                b += h;
                            else return !0;
                        g === e && (o = b);
                        l.push(p)
                    }
                    e = d.getLineStart(e);
                    h = d.getLineEnd(j, !0);
                    d = d.getLineStart(j);
                    a.setText(l.join(""), e, h);
                    j = e === f.start ? f.start : f.start - o;
                    f = Math.max(j, f.end - b + (f.end === d + 1 && f.start !== f.end ? 1 : 0));
                    a.setSelection(j, f);
                    return !0
                }
            },
            startUndo: function () {
                this.undoStack && this.undoStack.startCompoundChange()
            },
            endUndo: function () {
                this.undoStack && this.undoStack.endCompoundChange()
            }
        };
        f.TextActions = h;
        k.prototype = {
            init: function () {
                var a = this.editor.getTextView();
                a.setAction("lineStart",
                    function () {
                        return this.lineStart()
                    }.bind(this));
                a.setAction("enter",
                    function () {
                        return this.autoIndent()
                    }.bind(this));
                a.setKeyBinding(new p.KeyBinding(191, !0), "toggleLineComment");
                a.setAction("toggleLineComment",
                    function () {
                        return this.toggleLineComment()
                    }.bind(this), {
                    name: l.toggleLineComment
                });
                a.setKeyBinding(new p.KeyBinding(191, !0, !d.isMac, !1, d.isMac), "addBlockComment");
                a.setAction("addBlockComment",
                    function () {
                        return this.addBlockComment()
                    }.bind(this), {
                    name: l.addBlockComment
                });
                a.setKeyBinding(new p.KeyBinding(220, !0, !d.isMac, !1, d.isMac), "removeBlockComment");
                a.setAction("removeBlockComment",
                    function () {
                        return this.removeBlockComment()
                    }.bind(this), {
                    name: l.removeBlockComment
                })
            },
            autoIndent: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var b = a.getSelection();
                if (b.start === b.end) {
                    for (var d = a.getModel(), f = d.getLineAtOffset(b.start), e = d.getLine(f, !0), j = d.getLineStart(f), f = 0, j = b.start - j, h; f < j && ((h = e.charCodeAt(f)) === 32 || h === 9);) f++;
                    if (f > 0) {
                        for (var k = e.substring(0, f), f = j; f < e.length && ((h = e.charCodeAt(f++)) === 32 || h === 9);) b.end++;
                        a.setText(d.getLineDelimiter() + k, b.start, b.end);
                        return !0
                    }
                }
                return !1
            },
            addBlockComment: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var b = a.getModel(),
                    d = a.getSelection(),
                    f = this._findEnclosingComment(b, d.start, d.end);
                if (f.commentStart !== void 0 && f.commentEnd !== void 0) return !0;
                b = b.getText(d.start, d.end);
                if (b.length === 0) return !0;
                var f = b.length,
                    b = b.replace(/\/\*|\*\//g, ""),
                    e = b.length;
                a.setText("/*" + b + "*/", d.start, d.end);
                a.setSelection(d.start + 2, d.end + 2 + (e - f));
                return !0
            },
            contentAssistProposalApplied: function (a) {
                a = a.data.proposal;
                if (a.positions && a.positions.length > 0 && this.linkedMode) {
                    for (var b = [], d = 0; d < a.positions.length; ++d) b[d] = {
                        positions: [{
                            offset: a.positions[d].offset,
                            length: a.positions[d].length
                        }]
                    };
                    this.linkedMode.enterLinkedMode({
                        groups: b,
                        escapePosition: a.escapePosition
                    })
                } else a.groups && a.groups.length > 0 && this.linkedMode ? this.linkedMode.enterLinkedMode({
                    groups: a.groups,
                    escapePosition: a.escapePosition
                }) : a.escapePosition && this.editor.getTextView().setCaretOffset(a.escapePosition);
                return !0
            },
            _findEnclosingComment: function (a, b, d) {
                var f = a.getLineAtOffset(b),
                    e = a.getLineAtOffset(d),
                    j,
                    h,
                    k,
                    l,
                    o,
                    g;
                for (j = f; j >= 0; j--)
                    if (h = a.getLine(j), k = j === f ? b - a.getLineStart(f) : h.length, l = h.lastIndexOf("/*", k), h = h.lastIndexOf("*/", k), h > l) break;
                    else if (l !== -1) {
                        o = a.getLineStart(j) + l;
                        break
                    }
                for (j = e; j < a.getLineCount(); j++)
                    if (h = a.getLine(j), k = j === e ? d - a.getLineStart(e) : 0, l = h.indexOf("/*", k), h = h.indexOf("*/", k), l !== -1 && l < h) break;
                    else if (h !== -1) {
                        g = a.getLineStart(j) + h;
                        break
                    }
                return {
                    commentStart: o,
                    commentEnd: g
                }
            },
            lineStart: function () {
                for (var a = this.editor,
                    b = a.getModel(), d = a.getCaretOffset(), f = b.getLineAtOffset(d), e = b.getLineStart(f), b = b.getLine(f), f = 0; f < b.length; f++) {
                    var j = b.charCodeAt(f);
                    if (!(j === 32 || j === 9)) break
                }
                f += e;
                return d !== f ? (a.setSelection(f, f), !0) : !1
            },
            removeBlockComment: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                var b = a.getModel(),
                    d = a.getSelection(),
                    f = b.getText(d.start, d.end),
                    e,
                    j,
                    h;
                for (h = 0; h < f.length; h++)
                    if (f.substring(h, h + 2) === "/*") {
                        e = d.start + h;
                        break
                    }
                for (; h < f.length; h++)
                    if (f.substring(h, h + 2) === "*/") {
                        j = d.start + h;
                        break
                    }
                if (e !== void 0 && j !== void 0) a.setText(b.getText(e + 2, j), e, j + 2),
                    a.setSelection(e, j);
                else {
                    f = this._findEnclosingComment(b, d.start, d.end);
                    if (f.commentStart === void 0 || f.commentEnd === void 0) return !0;
                    b = b.getText(f.commentStart + 2, f.commentEnd);
                    a.setText(b, f.commentStart, f.commentEnd + 2);
                    a.setSelection(d.start - 2, d.end - 2)
                }
                return !0
            },
            toggleLineComment: function () {
                var a = this.editor;
                if (a.getTextView().getOptions("readonly")) return !1;
                for (var b = a.getModel(), d = a.getSelection(), f = b.getLineAtOffset(d.start), e = b.getLineAtOffset(d.end > d.start ? d.end - 1 : d.end), j = !0, h = [], k, l, o = f; o <= e; o++)
                    if (k = b.getLine(o, !0), h.push(k), !j || (l = k.indexOf("//")) === -1) j = !1;
                    else if (l !== 0) {
                        var g;
                        for (g = 0; g < l; g++)
                            if (j = k.charCodeAt(g), !(j === 32 || j === 9)) break;
                        j = g === l
                    }
                o = b.getLineStart(f);
                g = b.getLineEnd(e, !0);
                if (j) {
                    for (j = 0; j < h.length; j++) k = h[j],
                        l = k.indexOf("//"),
                        h[j] = k.substring(0, l) + k.substring(l + 2);
                    h = h.join("");
                    k = b.getLineStart(e);
                    b = o === d.start ? d.start : d.start - 2;
                    d = d.end - 2 * (e - f + 1) + (d.end === k + 1 ? 2 : 0)
                } else h.splice(0, 0, ""),
                    h = h.join("//"),
                    b = o === d.start ? d.start : d.start + 2,
                    d = d.end + 2 * (e - f + 1);
                a.setText(h, o, g);
                a.setSelection(b, d);
                return !0
            },
            startUndo: function () {
                this.undoStack && this.undoStack.startCompoundChange()
            },
            endUndo: function () {
                this.undoStack && this.undoStack.endCompoundChange()
            }
        };
        f.SourceCodeActions = k;
        return f
    });
define("orion/editor/templates", [],
    function () {
        function l(l, e, b) {
            this.prefix = l;
            this.description = e;
            this.template = b;
            this._parse()
        }

        function p(l, e) {
            this._keywords = l || [];
            this._templates = [];
            this.addTemplates(e || [])
        }
        l.prototype = {
            getProposal: function (l, e, b) {
                var l = e - l.length,
                    e = {},
                    d, h = b.delimiter !== void 0 ? b.delimiter : "\n";
                b.indentation && (h += b.indentation);
                for (var k = b.tab !== void 0 ? b.tab : "\t", f = 0, a = this.variables, c = this.segments, b = [], i = 0; i < c.length; i++) {
                    var m = c[i],
                        n = a[m];
                    if (n !== void 0) switch (m) {
                        case "${tab}":
                            m = k;
                            break;
                        case "${delimiter}":
                            m = h;
                            break;
                        case "${cursor}":
                            m = "";
                            d = f;
                            break;
                        default:
                            var j = e[m];
                            j || (j = e[m] = {
                                data: n.data,
                                positions: []
                            });
                            m = n.substitution;
                            j.data && j.data.values && (m = j.data.values[0]);
                            j.positions.push({
                                offset: l + f,
                                length: m.length
                            })
                    }
                    b.push(m);
                    f += m.length
                }
                var h = [],
                    q;
                for (q in e) e.hasOwnProperty(q) && h.push(e[q]);
                b = b.join("");
                if (d === void 0) d = b.length;
                return {
                    proposal: b,
                    description: this.description,
                    groups: h,
                    escapePosition: l + d
                }
            },
            match: function (l) {
                return this.prefix.indexOf(l) === 0
            },
            _parse: function () {
                var l = this.template,
                    e = [],
                    b = {},
                    d,
                    h = 0,
                    l = l.replace(/\n/g, "${delimiter}"),
                    l = l.replace(/\t/g, "${tab}");
                l.replace(/\$\{((?:[^\\}]+|\\.))*\}/g,
                    function (k, f, a) {
                        var c = k.substring(2, k.length - 1),
                            f = k,
                            i = c,
                            m = null,
                            n = i.indexOf(":");
                        n !== -1 && (i = i.substring(0, n), f = "${" + i + "}", m = JSON.parse(c.substring(n + 1).replace("\\}", "}").trim()));
                        (c = b[f]) || (c = b[f] = {});
                        c.substitution = i;
                        if (m) c.data = m;
                        (d = l.substring(h, a)) && e.push(d);
                        e.push(f);
                        h = a + k.length;
                        return i
                    });
                (d = l.substring(h, l.length)) && e.push(d);
                this.segments = e;
                this.variables = b
            }
        };
        p.prototype = {
            addTemplates: function (o) {
                for (var e = this.getTemplates(), b = 0; b < o.length; b++) e.push(new l(o[b].prefix, o[b].description, o[b].template))
            },
            computeProposals: function (l, e, b) {
                var d = this.getPrefix(l, e, b),
                    h = [];
                if (!this.isValid(d, l, e, b)) return h;
                h = h.concat(this.getTemplateProposals(d, e, b));
                return h = h.concat(this.getKeywordProposals(d))
            },
            getKeywords: function () {
                return this._keywords
            },
            getKeywordProposals: function (l) {
                var e = [],
                    b = this.getKeywords();
                if (b)
                    for (var d = 0; d < b.length; d++) b[d].indexOf(l) === 0 && e.push({
                        proposal: b[d].substring(l.length),
                        description: b[d]
                    });
                return e
            },
            getPrefix: function (l, e, b) {
                return b.prefix
            },
            getTemplates: function () {
                return this._templates
            },
            getTemplateProposals: function (l, e, b) {
                for (var d = [], h = this.getTemplates(), k = 0; k < h.length; k++) {
                    var f = h[k];
                    f.match(l) && (f = f.getProposal(l, e, b), this.removePrefix(l, f), d.push(f))
                }
                return d
            },
            removePrefix: function (l, e) {
                if (!(e.overwrite = e.proposal.substring(0, l.length) !== l)) e.proposal = e.proposal.substring(l.length)
            },
            isValid: function () {
                return !0
            }
        };
        return {
            Template: l,
            TemplateContentAssist: p
        }
    });
define("orion/editor/linkedMode", "i18n!orion/editor/nls/messages,orion/keyBinding,orion/editor/keyModes,orion/editor/annotations,orion/editor/templates,orion/objects,orion/util".split(","),
    function (l, p, o, e, b, d) {
        function h(b, a, c) {
            var d = b.getTextView();
            o.KeyMode.call(this, d);
            this.editor = b;
            this.undoStack = a;
            this.contentAssist = c;
            this.linkedModeModel = null;
            d.setAction("linkedModeEnter",
                function () {
                    this.exitLinkedMode(!0);
                    return !0
                }.bind(this));
            d.setAction("linkedModeCancel",
                function () {
                    this.exitLinkedMode(!1);
                    return !0
                }.bind(this));
            d.setAction("linkedModeNextGroup",
                function () {
                    var a = this.linkedModeModel;
                    this.selectLinkedGroup((a.selectedGroupIndex + 1) % a.groups.length);
                    return !0
                }.bind(this));
            d.setAction("linkedModePreviousGroup",
                function () {
                    var a = this.linkedModeModel;
                    this.selectLinkedGroup(a.selectedGroupIndex > 0 ? a.selectedGroupIndex - 1 : a.groups.length - 1);
                    return !0
                }.bind(this));
            this.linkedModeListener = {
                onActivating: function () {
                    this._groupContentAssistProvider && (this.contentAssist.setProviders([this._groupContentAssistProvider]), this.contentAssist.setProgress(null))
                }.bind(this),
                onModelChanged: function (a) {
                    if (!this.ignoreVerify) {
                        for (var b = this.linkedModeModel,
                            c, d; b;)
                            if (c = this._getPositionChanged(b, a.start, a.start + a.removedCharCount), d = c.position, d === void 0 || d.model !== b) this.exitLinkedMode(!1),
                                b = this.linkedModeModel;
                            else break;
                        if (b) {
                            b = 0;
                            d = a.addedCharCount - a.removedCharCount;
                            c = c.positions;
                            for (var f, e, h = 0; h < c.length; ++h) {
                                e = c[h];
                                f = e.position;
                                var g = f.offset <= a.start && a.start <= f.offset + f.length;
                                g && !e.ansestor ? (f.offset += b, f.length += d, b += d) : (f.offset += b, e.ansestor && g && (f.length += d));
                                if (e.escape) e.model.escapePosition = f.offset
                            }
                            this._updateAnnotations(c)
                        }
                    }
                }.bind(this),
                onVerify: function (a) {
                    if (!this.ignoreVerify) {
                        for (var b = this.linkedModeModel,
                            c, d; b;)
                            if (c = this._getPositionChanged(b, a.start, a.end), d = c.position, d === void 0 || d.model !== b) this.exitLinkedMode(!1),
                                b = this.linkedModeModel;
                            else break;
                        if (b) {
                            var f = this._compoundChange;
                            f ? f.owner.model === b && f.owner.group === d.group || (this.endUndo(), this.startUndo()) : this.startUndo();
                            b.selectedGroupIndex = d.group;
                            var f = 0,
                                e = a.text.length - (a.end - a.start);
                            c = c.positions;
                            for (var h, g, i = a.start - d.position.offset,
                                k = a.end - d.position.offset,
                                l = 0; l < c.length; ++l)
                                if (g = c[l], h = g.position, g.oldOffset = h.offset, g.model === b && g.group === d.group ? (h.offset += f, h.length += e, f += e) : (h.offset += f, g.ansestor && (h.length += d.count * e)), g.escape) g.model.escapePosition = h.offset;
                            this.ignoreVerify = !0;
                            f = this.editor.getTextView();
                            for (l = c.length - 1; l >= 0; l--) g = c[l],
                                g.model === b && g.group === d.group && f.setText(a.text, g.oldOffset + i, g.oldOffset + k);
                            this.ignoreVerify = !1;
                            a.text = null;
                            this._updateAnnotations(c)
                        }
                    }
                }.bind(this)
            }
        }
        var k = {};
        h.prototype = new o.KeyMode;
        d.mixin(h.prototype, {
            createKeyBindings: function () {
                var b = p.KeyBinding,
                    a = [];
                a.push({
                    actionID: "linkedModeEnter",
                    keyBinding: new b(13)
                });
                a.push({
                    actionID: "linkedModeCancel",
                    keyBinding: new b(27)
                });
                a.push({
                    actionID: "linkedModeNextGroup",
                    keyBinding: new b(9)
                });
                a.push({
                    actionID: "linkedModePreviousGroup",
                    keyBinding: new b(9, !1, !0)
                });
                return a
            },
            enterLinkedMode: function (b) {
                if (!this.linkedModeModel) {
                    var a = this.editor.getTextView();
                    a.addKeyMode(this);
                    a.addEventListener("Verify", this.linkedModeListener.onVerify);
                    a.addEventListener("ModelChanged", this.linkedModeListener.onModelChanged);
                    this.contentAssist.addEventListener("Activating", this.linkedModeListener.onActivating);
                    this.editor.reportStatus(l.linkedModeEntered, null, !0)
                }
                this._sortedPositions = null;
                if (this.linkedModeModel) b.previousModel = this.linkedModeModel,
                    b.parentGroup = this.linkedModeModel.selectedGroupIndex,
                    this.linkedModeModel.nextModel = b;
                this.linkedModeModel = b;
                this.selectLinkedGroup(0)
            },
            exitLinkedMode: function (b) {
                if (this.isActive()) {
                    if (this._compoundChange) this.endUndo(),
                        this._compoundChange = null;
                    this._sortedPositions = null;
                    var a = this.linkedModeModel;
                    this.linkedModeModel = a.previousModel;
                    a.parentGroup = a.previousModel = void 0;
                    if (this.linkedModeModel) this.linkedModeModel.nextModel = void 0;
                    if (!this.linkedModeModel) {
                        var c = this.editor.getTextView();
                        c.removeKeyMode(this);
                        c.removeEventListener("Verify", this.linkedModeListener.onVerify);
                        c.removeEventListener("ModelChanged", this.linkedModeListener.onModelChanged);
                        var d = this.contentAssist;
                        d.removeEventListener("Activating", this.linkedModeListener.onActivating);
                        d.offset = void 0;
                        this.editor.reportStatus(l.linkedModeExited, null, !0);
                        b && c.setCaretOffset(a.escapePosition, !1)
                    }
                    this.selectLinkedGroup(0)
                }
            },
            startUndo: function () {
                if (this.undoStack) {
                    var b = this,
                        a = this.linkedModeModel;
                    this._compoundChange = this.undoStack.startCompoundChange({
                        model: a,
                        group: a.selectedGroupIndex,
                        end: function () {
                            b._compoundChange = null
                        }
                    })
                }
            },
            endUndo: function () {
                this.undoStack && this.undoStack.endCompoundChange()
            },
            isActive: function () {
                return !!this.linkedModeModel
            },
            isStatusActive: function () {
                return !!this.linkedModeModel
            },
            selectLinkedGroup: function (d) {
                var a = this.linkedModeModel;
                if (a) {
                    a.selectedGroupIndex = d;
                    var d = a.groups[d],
                        c = d.positions[0],
                        e = this.editor.getTextView();
                    e.setSelection(c.offset, c.offset + c.length);
                    if (a = this.contentAssist)
                        if (a.offset = void 0, d.data && d.data.type === "link" && d.data.values) (this._groupContentAssistProvider = new b.TemplateContentAssist(d.data.values)).getPrefix = function () {
                            var a = e.getSelection();
                            return a.start === a.end && (a = e.getCaretOffset(), c.offset <= a && a <= c.offset + c.length) ? e.getText(c.offset, a) : ""
                        },
                            a.offset = c.offset,
                            a.deactivate(),
                            a.activate();
                        else if (this._groupContentAssistProvider) this._groupContentAssistProvider = null,
                            a.deactivate()
                }
                this._updateAnnotations()
            },
            _getModelPositions: function (b, a, c) {
                for (var d = a.groups,
                    e = 0; e < d.length; e++)
                    for (var h = d[e].positions, j = 0; j < h.length; j++) {
                        var k = h[j];
                        c && (k = {
                            offset: k.offset + c,
                            length: k.length
                        });
                        k = {
                            index: j,
                            group: e,
                            count: h.length,
                            model: a,
                            position: k
                        };
                        b.push(k);
                        if (a.nextModel && a.nextModel.parentGroup === e) k.ansestor = !0,
                            this._getModelPositions(b, a.nextModel, (c || 0) + h[j].offset - h[0].offset)
                    }
            },
            _getSortedPositions: function (b) {
                var a = this._sortedPositions;
                if (!a) {
                    for (a = []; b.previousModel;) b = b.previousModel;
                    for (this._getModelPositions(a, b); b;) b.escapePosition !== void 0 && a.push({
                        escape: !0,
                        model: b,
                        position: {
                            offset: b.escapePosition,
                            length: 0
                        }
                    }),
                        b = b.nextModel;
                    a.sort(function (a, b) {
                        return a.position.offset - b.position.offset
                    });
                    this._sortedPositions = a
                }
                return a
            },
            _getPositionChanged: function (b, a, c) {
                for (var d, b = this._getSortedPositions(b), e = b.length - 1; e >= 0; e--) {
                    var h = b[e].position;
                    if (h.offset <= a && c <= h.offset + h.length) {
                        d = b[e];
                        break
                    }
                }
                return {
                    position: d,
                    positions: b
                }
            },
            _updateAnnotations: function (b) {
                var a = this.editor.getAnnotationModel();
                if (a) {
                    for (var c = [], d = [], h = a.getTextModel(), h = a.getAnnotations(0, h.getCharCount()), k; h.hasNext();) switch (k = h.next(), k.type) {
                        case e.AnnotationType.ANNOTATION_LINKED_GROUP:
                        case e.AnnotationType.ANNOTATION_CURRENT_LINKED_GROUP:
                        case e.AnnotationType.ANNOTATION_SELECTED_LINKED_GROUP:
                            c.push(k)
                    }
                    if (h = this.linkedModeModel)
                        for (var b = b || this._getSortedPositions(h), j = 0; j < b.length; j++)
                            if (k = b[j], k.model === h) {
                                var l = e.AnnotationType.ANNOTATION_LINKED_GROUP;
                                k.group === h.selectedGroupIndex && (l = k.index === 0 ? e.AnnotationType.ANNOTATION_SELECTED_LINKED_GROUP : e.AnnotationType.ANNOTATION_CURRENT_LINKED_GROUP);
                                k = k.position;
                                k = e.AnnotationType.createAnnotation(l, k.offset, k.offset + k.length, "");
                                d.push(k)
                            }
                    a.replaceAnnotations(c, d)
                }
            }
        });
        k.LinkedMode = h;
        return k
    });
define("orion/editor/factories", "orion/editor/actions,orion/editor/undoStack,orion/editor/rulers,orion/editor/annotations,orion/editor/textDND,orion/editor/linkedMode".split(","),
    function (l, p, o, e, b, d) {
        function h() { }

        function k() { }

        function f() { }

        function a() { }

        function c() { }

        function i() { }
        var m = {};
        h.prototype = {
            createKeyBindings: function (a, b, c, f) {
                var f = new l.TextActions(a, b, f),
                    e = new d.LinkedMode(a, b, c),
                    a = new l.SourceCodeActions(a, b, c, e);
                return {
                    textActions: f,
                    linkedMode: e,
                    sourceCodeActions: a
                }
            }
        };
        m.KeyBindingsFactory = h;
        k.prototype = {
            createUndoStack: function (a) {
                a = a.getTextView();
                return new p.UndoStack(a, 200)
            }
        };
        m.UndoFactory = k;
        f.prototype = {
            createLineNumberRuler: function (a) {
                return new o.LineNumberRuler(a, "left", {
                    styleClass: "ruler lines"
                }, {
                    styleClass: "rulerLines odd"
                }, {
                    styleClass: "rulerLines even"
                })
            }
        };
        m.LineNumberRulerFactory = f;
        a.prototype = {
            createFoldingRuler: function (a) {
                return new o.FoldingRuler(a, "left", {
                    styleClass: "ruler folding"
                })
            }
        };
        m.FoldingRulerFactory = a;
        c.prototype = {
            createAnnotationModel: function (a) {
                return new e.AnnotationModel(a)
            },
            createAnnotationStyler: function (a, b) {
                return new e.AnnotationStyler(a, b)
            },
            createAnnotationRulers: function (a) {
                var b = new o.AnnotationRuler(a, "left", {
                    styleClass: "ruler annotations"
                }),
                    a = new o.OverviewRuler(a, "right", {
                        styleClass: "ruler overview"
                    });
                return {
                    annotationRuler: b,
                    overviewRuler: a
                }
            }
        };
        m.AnnotationFactory = c;
        i.prototype = {
            createTextDND: function (a, c) {
                return new b.TextDND(a.getTextView(), c)
            }
        };
        m.TextDNDFactory = i;
        return m
    });
define("orion/editor/editorFeatures", ["orion/editor/factories", "orion/editor/actions", "orion/editor/linkedMode"],
    function (l, p, o) {
        var e = {};
        e.KeyBindingsFactory = l.KeyBindingsFactory;
        e.UndoFactory = l.UndoFactory;
        e.LineNumberRulerFactory = l.LineNumberRulerFactory;
        e.FoldingRulerFactory = l.FoldingRulerFactory;
        e.AnnotationFactory = l.AnnotationFactory;
        e.TextDNDFactory = l.TextDNDFactory;
        e.TextActions = p.TextActions;
        e.SourceCodeActions = p.SourceCodeActions;
        e.LinkedMode = o.LinkedMode;
        return e
    });
(function (l, p) {
    typeof define === "function" && define.amd ? define("orion/Deferred", p) : typeof exports === "object" ? module.exports = p() : (l.orion = l.orion || {},
        l.orion.Deferred = p())
})(this,
    function () {
        function l() {
            for (var a; a = h.shift() || k.shift();) a();
            f = !1
        }

        function p(a, b) {
            (b ? k : h).push(a);
            f || (f = !0, b ? setTimeout(l, 0) : l())
        }

        function o(a) {
            return function () {
                a.apply(null, arguments)
            }
        }

        function e() { }

        function b() {
            var a = Error("Cancel");
            a.name = "Cancel";
            return a
        }

        function d() {
            function a() {
                for (var a; a = h.shift();) {
                    var b = a.deferred,
                        d = f === "resolved" ? "resolve" : "reject";
                    if (typeof a[d] === "function") try {
                        var k = a[d](c);
                        k && typeof k.then === "function" ? (b.cancel = k.cancel || e, k.then(o(b.resolve), o(b.reject), b.progress)) : b.resolve(k)
                    } catch (n) {
                        b.reject(n)
                    } else b[d](c)
                }
            }
            var c, f, h = [],
                k = this;
            this.reject = function (b) {
                f || (f = "rejected", c = b, h.length && p(a));
                return k.promise
            };
            this.resolve = function (b) {
                f || (f = "resolved", c = b, h.length && p(a));
                return k.promise
            };
            this.progress = function (a) {
                f || h.forEach(function (b) {
                    b.progress && b.progress(a)
                });
                return k.promise
            };
            this.cancel = function () {
                f || k.reject(b())
            };
            this.then = function (b, c, e) {
                var b = {
                    resolve: b,
                    reject: c,
                    progress: e,
                    deferred: new d
                },
                    l = b.deferred,
                    o = !1,
                    g = function () {
                        o || (o = !0, p(function () {
                            var a = l.cancel === g ? k.cancel : l.cancel;
                            typeof a === "function" && a()
                        },
                            !0))
                    };
                l.cancel = g;
                h.push(b);
                f && p(a, !0);
                return l.promise
            };
            this.promise = Object.create(Object.prototype, {
                then: {
                    value: k.then
                },
                cancel: {
                    get: function () {
                        return k.cancel
                    },
                    set: function (a) {
                        k.cancel = a
                    }
                }
            })
        }
        var h = [],
            k = [],
            f = !1;
        d.all = function (a, b) {
            function f(a, b) {
                k || (j[a] = b, --h === 0 && l.resolve(j))
            }

            function e(a, d) {
                if (!k) {
                    if (b) try {
                        f(a, b(d));
                        return
                    } catch (g) {
                        d = g
                    }
                    l.reject(d)
                }
            }
            var h = a.length,
                j = [],
                k = !1,
                l = new d;
            l.then(null,
                function () {
                    k = !0;
                    a.forEach(function (a) {
                        a.cancel && a.cancel()
                    })
                });
            h === 0 ? l.resolve(j) : a.forEach(function (a, b) {
                a.then(f.bind(null, b), e.bind(null, b))
            });
            return l.promise
        };
        d.when = function (a, b, f, e) {
            var h;
            if (!(a && typeof a.then === "function")) h = new d,
                h.resolve(a),
                a = h.promise;
            return a.then(b, f, e)
        };
        return d
    });
define("orion/editor/contentAssist", "i18n!orion/editor/nls/messages,orion/keyBinding,orion/editor/keyModes,orion/editor/eventTarget,orion/Deferred,orion/objects,orion/util".split(","),
    function (l, p, o, e, b, d, h) {
        var k, f, a;

        function c(b) {
            this.textView = b;
            this.state = k;
            this.providers = [];
            var c = this;
            this.contentAssistListener = {
                onModelChanging: function (b) {
                    c.isDeactivatingChange(b) ? c.setState(k) : c.state === f && c.setState(a)
                },
                onScroll: function () {
                    c.setState(k)
                },
                onSelection: function () {
                    var b = c.state;
                    if (b === f || b === a) c.computeProposals(),
                        c.setState(a)
                }
            };
            b.setKeyBinding(h.isMac ? new p.KeyBinding(" ", !1, !1, !1, !0) : new p.KeyBinding(" ", !0), "contentAssist");
            b.setAction("contentAssist",
                function () {
                    c.activate();
                    return !0
                }, {
                name: l.contentAssist
            })
        }

        function i(a, b) {
            var c = a.textView;
            o.KeyMode.call(this, c);
            this.contentAssist = a;
            this.widget = b;
            this.proposals = [];
            var d = this;
            this.contentAssist.addEventListener("ProposalsComputed",
                function (a) {
                    d.proposals = a.data.proposals;
                    d.selectedIndex = d.proposals.length ? 0 : -1
                });
            c.setAction("contentAssistApply",
                function () {
                    return this.enter()
                }.bind(this));
            c.setAction("contentAssistCancel",
                function () {
                    return this.cancel()
                }.bind(this));
            c.setAction("contentAssistNextProposal",
                function () {
                    return this.lineDown()
                }.bind(this));
            c.setAction("contentAssistPreviousProposal",
                function () {
                    return this.lineUp()
                }.bind(this));
            c.setAction("contentAssistTab",
                function () {
                    return this.tab()
                }.bind(this))
        }

        function m(a, b) {
            this.contentAssist = a;
            this.textView = this.contentAssist.getTextView();
            this.isShowing = this.textViewListenerAdded = !1;
            var c = this.textView.getOptions("parent").ownerDocument;
            this.parentNode = typeof b === "string" ? c.getElementById(b) : b;
            if (!this.parentNode) {
                this.parentNode = h.createElement(c, "div");
                this.parentNode.className = "contentassist";
                var d = c.getElementsByTagName("body")[0];
                if (d) d.appendChild(this.parentNode);
                else throw Error("parentNode is required");
            }
            var f = this;
            this.textViewListener = {
                onMouseDown: function (a) {
                    a.event.target.parentElement !== f.parentNode && f.contentAssist.deactivate()
                }
            };
            this.contentAssist.addEventListener("ProposalsComputed",
                function (a) {
                    f.setProposals(a.data.proposals);
                    f.show();
                    if (!f.textViewListenerAdded) f.textView.addEventListener("MouseDown", f.textViewListener.onMouseDown),
                        f.textViewListenerAdded = !0
                });
            this.contentAssist.addEventListener("Deactivating",
                function () {
                    f.setProposals([]);
                    f.hide();
                    if (f.textViewListenerAdded) f.textView.removeEventListener("MouseDown", f.textViewListener.onMouseDown),
                        f.textViewListenerAdded = !1;
                    f.textViewListenerAdded = !1
                });
            this.scrollListener = function () {
                f.isShowing && f.position()
            };
            c.addEventListener && c.addEventListener("scroll", this.scrollListener)
        }
        k = 1;
        f = 2;
        a = 3;
        var n = {
            selected: " selected",
            hr: "proposal-hr",
            emphasis: "proposal-emphasis",
            noemphasis: "proposal-noemphasis",
            dfault: "proposal-default"
        };
        c.prototype = {
            apply: function (a) {
                if (!a) return !1;
                var b = this.textView.getSelection(),
                    c = Math.min(b.start, b.end),
                    b = Math.max(b.start, b.end);
                a.overwrite && (c = this.getPrefixStart(c));
                var d = {
                    proposal: a,
                    start: c,
                    end: b
                };
                this.setState(k);
                this.textView.setText(typeof a === "string" ? a : a.proposal, c, b);
                this.dispatchEvent({
                    type: "ProposalApplied",
                    data: d
                });
                return !0
            },
            activate: function () {
                this.state === k && this.setState(f)
            },
            deactivate: function () {
                this.setState(k)
            },
            getTextView: function () {
                return this.textView
            },
            isActive: function () {
                return this.state === f || this.state === a
            },
            isDeactivatingChange: function (a) {
                var b = a.removedCharCount > 0 && a.addedCharCount === 0,
                    c = this.textView,
                    c = a.start + 1 <= c.getModel().getCharCount() && /^\s*$/.test(c.getText(a.start, a.start + 1));
                return a.removedLineCount > 0 || a.addedLineCount > 0 || b && c
            },
            setState: function (a) {
                var b;
                a === f ? (b = "Activating", this._mode && this._mode.setActive(!0)) : a === k && (b = "Deactivating", this._mode && this._mode.setActive(!1));
                b && this.dispatchEvent({
                    type: b
                });
                this.state = a;
                this.onStateChange(a)
            },
            setMode: function (a) {
                this._mode = a
            },
            onStateChange: function (a) {
                if (a === k) {
                    if (this.listenerAdded) this.textView.removeEventListener("ModelChanging", this.contentAssistListener.onModelChanging),
                        this.textView.removeEventListener("Scroll", this.contentAssistListener.onScroll),
                        this.textView.removeEventListener("Selection", this.contentAssistListener.onSelection),
                        this.listenerAdded = !1
                } else if (a === f) {
                    if (!this.listenerAdded) this.textView.addEventListener("ModelChanging", this.contentAssistListener.onModelChanging),
                        this.textView.addEventListener("Scroll", this.contentAssistListener.onScroll),
                        this.textView.addEventListener("Selection", this.contentAssistListener.onSelection),
                        this.listenerAdded = !0;
                    this.computeProposals()
                }
            },
            computeProposals: function () {
                var a = this;
                this._computeProposals(this.textView.getCaretOffset()).then(function (b) {
                    a.isActive() && a.dispatchEvent({
                        type: "ProposalsComputed",
                        data: {
                            proposals: b
                        }
                    })
                })
            },
            getPrefixStart: function (a) {
                for (; a > 0 && /[A-Za-z0-9_]/.test(this.textView.getText(a - 1, a));) a--;
                return a
            },
            handleError: function (a) {
                typeof console !== "undefined" && (console.log("Error retrieving content assist proposals"), console.log(a))
            },
            _computeProposals: function (a) {
                for (var c = this.providers,
                    d = this.textView,
                    f = d.getModel(), e = d.getText(), g = f.getLine(f.getLineAtOffset(a)), h = 0; h < g.length && /\s/.test(g.charAt(h));) h++;
                var h = g.substring(0, h),
                    i = d.getOptions("tabSize", "expandTab"),
                    i = i.expandTab ? Array(i.tabSize + 1).join(" ") : "\t",
                    k = {
                        line: g,
                        prefix: d.getText(this.getPrefixStart(a), a),
                        selection: d.getSelection(),
                        delimiter: f.getLineDelimiter(),
                        tab: i,
                        indentation: h
                    },
                    m = this,
                    c = c.map(function (c) {
                        var d = c.computeProposals || c.getProposals,
                            f;
                        try {
                            typeof d === "function" && (f = m.progress ? m.progress.progress(d.apply(c, [e, a, k]), "Generating content assist proposal") : d.apply(c, [e, a, k]))
                        } catch (g) {
                            m.handleError(g)
                        }
                        return b.when(f)
                    });
                return b.all(c, this.handleError).then(function (a) {
                    return a.reduce(function (a, b) {
                        return b instanceof Array ? a.concat(b) : a
                    },
                        [])
                })
            },
            setProviders: function (a) {
                this.providers = a.slice(0)
            },
            setProgress: function (a) {
                this.progress = a
            }
        };
        e.EventTarget.addMixin(c.prototype);
        i.prototype = new o.KeyMode;
        d.mixin(i.prototype, {
            createKeyBindings: function () {
                var a = p.KeyBinding,
                    b = [];
                b.push({
                    actionID: "contentAssistApply",
                    keyBinding: new a(13)
                });
                b.push({
                    actionID: "contentAssistCancel",
                    keyBinding: new a(27)
                });
                b.push({
                    actionID: "contentAssistNextProposal",
                    keyBinding: new a(40)
                });
                b.push({
                    actionID: "contentAssistPreviousProposal",
                    keyBinding: new a(38)
                });
                b.push({
                    actionID: "contentAssistTab",
                    keyBinding: new a(9)
                });
                return b
            },
            cancel: function () {
                this.getContentAssist().deactivate()
            },
            getContentAssist: function () {
                return this.contentAssist
            },
            isActive: function () {
                return this.getContentAssist().isActive()
            },
            setActive: function (a) {
                a ? this.contentAssist.textView.addKeyMode(this) : this.contentAssist.textView.removeKeyMode(this)
            },
            lineUp: function () {
                for (var a = this.selectedIndex === 0 ? this.proposals.length - 1 : this.selectedIndex - 1; this.proposals[a].unselectable && a > 0;) a--;
                this.selectedIndex = a;
                this.widget && this.widget.setSelectedIndex(this.selectedIndex);
                return !0
            },
            lineDown: function () {
                for (var a = this.selectedIndex === this.proposals.length - 1 ? 0 : this.selectedIndex + 1; this.proposals[a].unselectable && a < this.proposals.length - 1;) a++;
                this.selectedIndex = a;
                this.widget && this.widget.setSelectedIndex(this.selectedIndex);
                return !0
            },
            enter: function () {
                return this.contentAssist.apply(this.proposals[this.selectedIndex] || null)
            },
            tab: function () {
                return this.widget ? (this.widget.createAccessible(this), this.widget.parentNode.focus(), !0) : !1
            }
        });
        m.prototype = {
            onClick: function (a) {
                this.contentAssist.apply(this.getProposal(a.target));
                this.textView.focus()
            },
            createDiv: function (a, b, c, d) {
                var f = c.ownerDocument,
                    e = h.createElement(f, "div");
                e.id = "contentoption" + d;
                e.setAttribute("role", "option");
                a.style === "hr" ? a = h.createElement(f, "hr") : (e.className = this.calculateClasses(a.style, b), a = f.createTextNode(this.getDisplayString(a)), b && this.parentNode.setAttribute("aria-activedescendant", e.id));
                e.appendChild(a, e);
                c.appendChild(e)
            },
            createAccessible: function (a) {
                this._isAccessible || this.parentNode.addEventListener("keydown",
                    function (b) {
                        b.preventDefault();
                        if (b.keyCode === 27) return a.cancel();
                        else if (b.keyCode === 38) return a.lineUp();
                        else if (b.keyCode === 40) return a.lineDown();
                        else if (b.keyCode === 13) return a.enter();
                        return !1
                    });
                this._isAccessible = !0
            },
            calculateClasses: function (a, b) {
                var c = n[a];
                if (!c) c = n.dfault;
                return b ? c + n.selected : c
            },
            getDisplayString: function (a) {
                return typeof a === "string" ? a : a.description && typeof a.description === "string" ? a.description : a.proposal
            },
            getProposal: function (a) {
                for (var b = 0,
                    c = this.parentNode.firstChild; c !== null; c = c.nextSibling) {
                    if (c === a) return this.proposals[b] || null;
                    b++
                }
                return null
            },
            setSelectedIndex: function (a) {
                this.selectedIndex = a;
                this.selectNode(this.parentNode.childNodes[this.selectedIndex])
            },
            selectNode: function (a) {
                for (var b = this.parentNode.childNodes,
                    c = 0; c < b.length; c++) {
                    var d = b[c],
                        f = d.className.indexOf(n.selected);
                    if (f >= 0) d.className = d.className.substring(0, f) + d.className.substring(f + n.selected.length);
                    d === a && (d.className += n.selected, this.parentNode.setAttribute("aria-activedescendant", d.id), d.focus(), d.offsetTop < this.parentNode.scrollTop ? d.scrollIntoView(!0) : d.offsetTop + d.offsetHeight > this.parentNode.scrollTop + this.parentNode.clientHeight && d.scrollIntoView(!1))
                }
            },
            setProposals: function (a) {
                this.proposals = a
            },
            show: function () {
                if (this.proposals.length === 0) this.hide();
                else {
                    this.parentNode.innerHTML = "";
                    for (var a = 0; a < this.proposals.length; a++) this.createDiv(this.proposals[a], a === 0, this.parentNode, a);
                    this.position();
                    this.parentNode.onclick = this.onClick.bind(this);
                    this.isShowing = !0
                }
            },
            hide: function () {
                this.parentNode.ownerDocument.activeElement === this.parentNode && this.textView.focus();
                this.parentNode.style.display = "none";
                this.parentNode.onclick = null;
                this.isShowing = !1
            },
            position: function () {
                var a = this.contentAssist,
                    a = this.textView.getLocationAtOffset(a.offset !== void 0 ? a.offset : this.textView.getCaretOffset());
                a.y += this.textView.getLineHeight();
                this.textView.convert(a, "document", "page");
                this.parentNode.style.position = "fixed";
                this.parentNode.style.left = a.x + "px";
                this.parentNode.style.top = a.y + "px";
                this.parentNode.style.display = "block";
                this.parentNode.scrollTop = 0;
                var b = this.parentNode.ownerDocument,
                    c = b.documentElement.clientWidth;
                if (a.y + this.parentNode.offsetHeight > b.documentElement.clientHeight) this.parentNode.style.top = a.y - this.parentNode.offsetHeight - this.textView.getLineHeight() + "px";
                if (a.x + this.parentNode.offsetWidth > c) this.parentNode.style.left = c - this.parentNode.offsetWidth + "px"
            }
        };
        return {
            ContentAssist: c,
            ContentAssistMode: i,
            ContentAssistWidget: m
        }
    });
define("orion/editor/keywords", [],
    function () {
        return {
            JSKeywords: "break,case,class,catch,continue,const,debugger,default,delete,do,else,enum,export,extends,false,finally,for,function,if,implements,import,in,instanceof,interface,let,new,null,package,private,protected,public,return,static,super,switch,this,throw,true,try,typeof,undefined,var,void,while,with,yield".split(","),
            CSSKeywords: "alignment-adjust,alignment-baseline,animation,animation-delay,animation-direction,animation-duration,animation-iteration-count,animation-name,animation-play-state,animation-timing-function,appearance,azimuth,backface-visibility,background,background-attachment,background-clip,background-color,background-image,background-origin,background-position,background-repeat,background-size,baseline-shift,binding,bleed,bookmark-label,bookmark-level,bookmark-state,bookmark-target,border,border-bottom,border-bottom-color,border-bottom-left-radius,border-bottom-right-radius,border-bottom-style,border-bottom-width,border-collapse,border-color,border-image,border-image-outset,border-image-repeat,border-image-slice,border-image-source,border-image-width,border-left,border-left-color,border-left-style,border-left-width,border-radius,border-right,border-right-color,border-right-style,border-right-width,border-spacing,border-style,border-top,border-top-color,border-top-left-radius,border-top-right-radius,border-top-style,border-top-width,border-width,bottom,box-align,box-decoration-break,box-direction,box-flex,box-flex-group,box-lines,box-ordinal-group,box-orient,box-pack,box-shadow,box-sizing,break-after,break-before,break-inside,caption-side,clear,clip,color,color-profile,column-count,column-fill,column-gap,column-rule,column-rule-color,column-rule-style,column-rule-width,column-span,column-width,columns,content,counter-increment,counter-reset,crop,cue,cue-after,cue-before,cursor,direction,display,dominant-baseline,drop-initial-after-adjust,drop-initial-after-align,drop-initial-before-adjust,drop-initial-before-align,drop-initial-size,drop-initial-value,elevation,empty-cells,fit,fit-position,flex-align,flex-flow,flex-inline-pack,flex-order,flex-pack,float,float-offset,font,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,grid-columns,grid-rows,hanging-punctuation,height,hyphenate-after,hyphenate-before,hyphenate-character,hyphenate-lines,hyphenate-resource,hyphens,icon,image-orientation,image-rendering,image-resolution,inline-box-align,left,letter-spacing,line-height,line-stacking,line-stacking-ruby,line-stacking-shift,line-stacking-strategy,list-style,list-style-image,list-style-position,list-style-type,margin,margin-bottom,margin-left,margin-right,margin-top,mark,mark-after,mark-before,marker-offset,marks,marquee-direction,marquee-loop,marquee-play-count,marquee-speed,marquee-style,max-height,max-width,min-height,min-width,move-to,nav-down,nav-index,nav-left,nav-right,nav-up,opacity,orphans,outline,outline-color,outline-offset,outline-style,outline-width,overflow,overflow-style,overflow-x,overflow-y,padding,padding-bottom,padding-left,padding-right,padding-top,page,page-break-after,page-break-before,page-break-inside,page-policy,pause,pause-after,pause-before,perspective,perspective-origin,phonemes,pitch,pitch-range,play-during,position,presentation-level,punctuation-trim,quotes,rendering-intent,resize,rest,rest-after,rest-before,richness,right,rotation,rotation-point,ruby-align,ruby-overhang,ruby-position,ruby-span,size,speak,speak-header,speak-numeral,speak-punctuation,speech-rate,stress,string-set,table-layout,target,target-name,target-new,target-position,text-align,text-align-last,text-decoration,text-emphasis,text-height,text-indent,text-justify,text-outline,text-shadow,text-transform,text-wrap,top,transform,transform-origin,transform-style,transition,transition-delay,transition-duration,transition-property,transition-timing-function,unicode-bidi,vertical-align,visibility,voice-balance,voice-duration,voice-family,voice-pitch,voice-pitch-range,voice-rate,voice-stress,voice-volume,volume,white-space,white-space-collapse,widows,width,word-break,word-spacing,word-wrap,z-index".split(","),
            JAVAKeywords: "abstract,boolean,break,byte,case,catch,char,class,continue,default,do,double,else,extends,false,final,finally,float,for,if,implements,import,instanceof,int,interface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,void,volatile,while".split(",")
        }
    });
define("orion/editor/cssContentAssist", ["orion/editor/templates", "orion/editor/keywords"],
    function (l, p) {
        function o(a) {
            return JSON.stringify(a).replace("}", "\\}")
        }

        function e() { }
        for (var b = {
            type: "link",
            values: "visible,hidden,scroll,auto,no-display,no-content".split(",")
        },
            d = {
                type: "link",
                values: "solid,dashed,dotted,double,groove,ridge,inset,outset".split(",")
            },
            h = {
                type: "link",
                values: []
            },
            k = 0; k < 10; k++) h.values.push(k.toString());
        for (var f = {
            type: "link",
            values: "black,white,red,green,blue,magenta,yellow,cyan,grey,darkred,darkgreen,darkblue,darkmagenta,darkcyan,darkyellow,darkgray,lightgray".split(",")
        },
            a = [{
                prefix: "rule",
                description: "rule - class selector rule",
                template: ".${class} {\n\t${cursor}\n}"
            },
            {
                prefix: "rule",
                description: "rule - id selector rule",
                template: "#${id} {\n\t${cursor}\n}"
            },
            {
                prefix: "outline",
                description: "outline - outline style",
                template: "outline: ${color:" + o(f) + "} ${style:" + o(d) + "} ${width:" + o(h) + "}px;"
            },
            {
                prefix: "background-image",
                description: "background-image - image style",
                template: 'background-image: url("${uri}");'
            },
            {
                prefix: "url",
                description: "url - url image",
                template: 'url("${uri}");'
            },
            {
                prefix: "rgb",
                description: "rgb - rgb color",
                template: "rgb(${red},${green},${blue});"
            },
            {
                prefix: "@",
                description: "import - import style sheet",
                template: '@import "${uri}";'
            }
            ], c = [{
                prop: "display",
                values: {
                    type: "link",
                    values: "none,block,box,flex,inline,inline-block,inline-flex,inline-table,list-item,table,table-caption,table-cell,table-column,table-column-group,table-footer-group,table-header-group,table-row,table-row-group,inherit".split(",")
                }
            },
            {
                prop: "overflow",
                values: b
            },
            {
                prop: "overflow-x",
                values: b
            },
            {
                prop: "overflow-y",
                values: b
            },
            {
                prop: "float",
                values: {
                    type: "link",
                    values: ["left", "right", "none", "inherit"]
                }
            },
            {
                prop: "position",
                values: {
                    type: "link",
                    values: ["absolute", "fixed", "relative", "static", "inherit"]
                }
            },
            {
                prop: "cursor",
                values: {
                    type: "link",
                    values: "auto,crosshair,default,e-resize,help,move,n-resize,ne-resize,nw-resize,pointer,progress,s-resize,se-resize,sw-resize,text,w-resize,wait,inherit".split(",")
                }
            },
            {
                prop: "color",
                values: f
            },
            {
                prop: "border-top-color",
                values: f
            },
            {
                prop: "border-bottom-color",
                values: f
            },
            {
                prop: "border-right-color",
                values: f
            },
            {
                prop: "border-left-color",
                values: f
            },
            {
                prop: "background-color",
                values: f
            },
            {
                prop: "font-style",
                values: {
                    type: "link",
                    values: ["italic", "normal", "oblique", "inherit"]
                }
            },
            {
                prop: "font-weight",
                values: {
                    type: "link",
                    values: "bold,normal,bolder,lighter,100,200,300,400,500,600,700,800,900,inherit".split(",")
                }
            },
            {
                prop: "white-space",
                values: {
                    type: "link",
                    values: "pre,pre-line,pre-wrap,nowrap,normal,inherit".split(",")
                }
            },
            {
                prop: "word-wrap",
                values: {
                    type: "link",
                    values: ["normal", "break-word"]
                }
            },
            {
                prop: "visibility",
                values: {
                    type: "link",
                    values: ["hidden", "visible", "collapse", "inherit"]
                }
            }
            ], k = 0; k < c.length; k++) b = c[k],
                a.push({
                    prefix: b.prop,
                    description: b.prop + " - " + b.prop + " style",
                    template: b.prop + ": ${value:" + o(b.values) + "};"
                });
        c = "width,height,top,bottom,left,right,min-width,min-height,max-width,max-height,margin,padding,padding-left,padding-right,padding-top,padding-bottom,margin-left,margin-top,margin-bottom,margin-right".split(",");
        for (k = 0; k < c.length; k++) b = c[k],
            a.push({
                prefix: b,
                description: b + " - " + b + " pixel style",
                template: b + ": ${value}px;"
            });
        c = ["padding", "margin"];
        for (k = 0; k < c.length; k++) b = c[k],
            a.push({
                prefix: b,
                description: b + " - " + b + " top right bottom left style",
                template: b + ": ${top}px ${left}px ${bottom}px ${right}px;"
            }),
            a.push({
                prefix: b,
                description: b + " - " + b + " top right,left bottom style",
                template: b + ": ${top}px ${right_left}px ${bottom}px;"
            }),
            a.push({
                prefix: b,
                description: b + " - " + b + " top,bottom right,left style",
                template: b + ": ${top_bottom}px ${right_left}px"
            });
        c = ["border", "border-top", "border-bottom", "border-left", "border-right"];
        for (k = 0; k < c.length; k++) b = c[k],
            a.push({
                prefix: b,
                description: b + " - " + b + " style",
                template: b + ": ${width:" + o(h) + "}px ${style:" + o(d) + "} ${color:" + o(f) + "};"
            });
        e.prototype = new l.TemplateContentAssist(p.CSSKeywords, a);
        e.prototype.getPrefix = function (a, b) {
            for (var c = b; c && /[A-Za-z\-\@]/.test(a.charAt(c - 1));) c--;
            return c ? a.substring(c, b) : ""
        };
        return {
            CssContentAssistProvider: e
        }
    });
define("orion/editor/htmlContentAssist", ["orion/editor/templates"],
    function (l) {
        function p() { }
        var o = new l.Template("", "Simple HTML document", '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset=utf-8>\n\t\t<title>${title}</title>\n\t</head>\n\t<body>\n\t\t<h1>${header}</h1>\n\t\t<p>\n\t\t\t${cursor}\n\t\t</p>\n\t</body>\n</html>'),
            e = [{
                prefix: "<img",
                description: "<img> - HTML image element",
                template: '<img src="${cursor}" alt="${Image}"/>'
            },
            {
                prefix: "<a",
                description: "<a> - HTML anchor element",
                template: '<a href="${cursor}"></a>'
            },
            {
                prefix: "<ul",
                description: "<ul> - HTML unordered list",
                template: "<ul>\n\t<li>${cursor}</li>\n</ul>"
            },
            {
                prefix: "<ol",
                description: "<ol> - HTML ordered list",
                template: "<ol>\n\t<li>${cursor}</li>\n</ol>"
            },
            {
                prefix: "<dl",
                description: "<dl> - HTML definition list",
                template: "<dl>\n\t<dt>${cursor}</dt>\n\t<dd></dd>\n</dl>"
            },
            {
                prefix: "<table",
                description: "<table> - basic HTML table",
                template: "<table>\n\t<tr>\n\t\t<td>${cursor}</td>\n\t</tr>\n</table>"
            }
            ],
            b,
            d,
            h,
            k,
            f = "abbr,b,button,canvas,cite,command,dd,del,dfn,dt,em,embed,font,h1,h2,h3,h4,h5,h6,i,ins,kbd,label,li,mark,meter,object,option,output,progress,q,rp,rt,samp,small,strong,sub,sup,td,time,title,tt,u,var".split(",");
        for (k = 0; k < f.length; k++) b = f[k],
            h = "<" + b + "></" + b + ">",
            d = "<" + b + ">${cursor}</" + b + ">",
            e.push({
                prefix: "<" + b,
                description: h,
                template: d
            });
        f = "address,article,aside,audio,bdo,blockquote,body,caption,code,colgroup,datalist,details,div,fieldset,figure,footer,form,head,header,hgroup,iframe,legend,map,menu,nav,noframes,noscript,optgroup,p,pre,ruby,script,section,select,span,style,tbody,textarea,tfoot,th,thead,tr,video".split(",");
        for (k = 0; k < f.length; k++) b = f[k],
            h = "<" + b + "></" + b + ">",
            d = "<" + b + ">\n\t${cursor}\n</" + b + ">",
            e.push({
                prefix: "<" + b,
                description: h,
                template: d
            });
        f = "area,base,br,col,hr,input,link,meta,param,keygen,source".split(",");
        for (k = 0; k < f.length; k++) b = f[k],
            d = h = "<" + b + "/>",
            e.push({
                prefix: "<" + b,
                description: h,
                template: d
            });
        p.prototype = new l.TemplateContentAssist([], e);
        p.prototype.getPrefix = function (a, b) {
            for (var d = b; d && /[A-Za-z<]/.test(a.charAt(d - 1));)
                if (d--, a.charAt(d) === "<") break;
            return d ? a.substring(d, b) : ""
        };
        p.prototype.computeProposals = function (a, b, d) {
            return a.length === 0 ? [o.getProposal("", b, d)] : l.TemplateContentAssist.prototype.computeProposals.call(this, a, b, d)
        };
        return {
            HTMLContentAssistProvider: p
        }
    });
define("orion/editor/jsTemplateContentAssist", ["orion/editor/templates", "orion/editor/keywords"],
    function (l, p) {
        function o() { }
        var e = [{
            prefix: "if",
            description: "if - if statement",
            template: "if (${condition}) {\n\t${cursor}\n}"
        },
        {
            prefix: "if",
            description: "if - if else statement",
            template: "if (${condition}) {\n\t${cursor}\n} else {\n\t\n}"
        },
        {
            prefix: "for",
            description: "for - iterate over array",

            template: "for (var ${i}=0; ${i}<${array}.length; ${i}++) {\n\t${cursor}\n}"
        },
        {
            prefix: "for",
            description: "for - iterate over array with local var",
            template: "for (var ${i}=0; ${i}<${array}.length; ${i}++) {\n\tvar ${value} = ${array}[${i}];\n\t${cursor}\n}"
        },
        {
            prefix: "for",
            description: "for..in - iterate over properties of an object",
            template: "for (var ${property} in ${object}) {\n\tif (${object}.hasOwnProperty(${property})) {\n\t\t${cursor}\n\t}\n}"
        },
        {
            prefix: "while",
            description: "while - while loop with condition",
            template: "while (${condition}) {\n\t${cursor}\n}"
        },
        {
            prefix: "do",
            description: "do - do while loop with condition",
            template: "do {\n\t${cursor}\n} while (${condition});"
        },
        {
            prefix: "switch",
            description: "switch - switch case statement",
            template: "switch (${expression}) {\n\tcase ${value1}:\n\t\t${cursor}\n\t\tbreak;\n\tdefault:\n}"
        },
        {
            prefix: "case",
            description: "case - case statement",
            template: "case ${value}:\n\t${cursor}\n\tbreak;"
        },
        {
            prefix: "try",
            description: "try - try..catch statement",
            template: "try {\n\t${cursor}\n} catch (${err}) {\n}"
        },
        {
            prefix: "try",
            description: "try - try..catch statement with finally block",
            template: "try {\n\t${cursor}\n} catch (${err}) {\n} finally {\n}"
        },
        {
            prefix: "var",
            description: "var - variable declaration",
            template: "var ${name};"
        },
        {
            prefix: "var",
            description: "var - variable declaration with value",
            template: "var ${name} = ${value};"
        },
        {
            prefix: "let",
            description: "let - local scope variable declaration",
            template: "let ${name};"
        },
        {
            prefix: "let",
            description: "let - local scope variable declaration with value",
            template: "let ${name} = ${value};"
        },
        {
            prefix: "return",
            description: "return - return result",
            template: "return ${result};"
        },
        {
            prefix: "typeof",
            description: "typeof - typeof statement",
            template: 'typeof ${object} === "${type:' + JSON.stringify({
                type: "link",
                values: "undefined,object,boolean,number,string,function,xml".split(",")
            }).replace("}", "\\}") + '}"'
        },
        {
            prefix: "instanceof",
            description: "instanceof - instanceof statement",
            template: "${object} instanceof ${type}"
        },
        {
            prefix: "with",
            description: "with - with statement",
            template: "with (${object}) {\n\t${cursor}\n}"
        },
        {
            prefix: "function",
            description: "function - function declaration",
            template: "function ${name} (${parameter}) {\n\t${cursor}\n}"
        },
        {
            prefix: "log",
            description: "log - console log",
            template: "console.log(${object});"
        }
        ];
        o.prototype = new l.TemplateContentAssist(p.JSKeywords, e);
        o.prototype.isValid = function (b, d, e) {
            b = e - b.length - 1;
            for (e = ""; b >= 0;)
                if (e = d[b], e === "\n" || e === "\r") break;
                else if (/\s/.test(e)) b--;
                else break;
            return ":!@#$^&*.?<>".indexOf(e) === -1
        };
        return {
            JSTemplateContentAssistProvider: o
        }
    });
define("orion/editor/AsyncStyler", ["i18n!orion/editor/nls/messages", "orion/editor/annotations"],
    function (l, p) {
        function o(d) {
            return d.getProperty("objectClass").indexOf(b) !== -1 && d.getProperty("type") === "highlighter"
        }

        function e(b, d, f) {
            this.initialize(b, d, f);
            this.lineStyles = []
        }
        var b = "orion.edit.highlighter",
            d = b + " service must be an event emitter";
        p.AnnotationType.registerType("orion.annotation.highlightError", {
            title: l.syntaxError,
            html: "<div class='annotationHTML error'></div>",
            rangeStyle: {
                styleClass: "annotationRange error"
            }
        });
        e.prototype = {
            initialize: function (d, e, f) {
                this.textView = d;
                this.serviceRegistry = e;
                this.annotationModel = f;
                this.services = [];
                var a = this;
                this.listener = {
                    onModelChanging: function (b) {
                        a.onModelChanging(b)
                    },
                    onModelChanged: function (b) {
                        a.onModelChanged(b)
                    },
                    onDestroy: function (b) {
                        a.onDestroy(b)
                    },
                    onLineStyle: function (b) {
                        a.onLineStyle(b)
                    },
                    onStyleReady: function (b) {
                        a.onStyleReady(b)
                    },
                    onServiceAdded: function (b) {
                        a.onServiceAdded(b.serviceReference, a.serviceRegistry.getService(b.serviceReference))
                    },
                    onServiceRemoved: function (b) {
                        a.onServiceRemoved(b.serviceReference, a.serviceRegistry.getService(b.serviceReference))
                    }
                };
                d.addEventListener("ModelChanging", this.listener.onModelChanging);
                d.addEventListener("ModelChanged", this.listener.onModelChanged);
                d.addEventListener("Destroy", this.listener.onDestroy);
                d.addEventListener("LineStyle", this.listener.onLineStyle);
                e.addEventListener("registered", this.listener.onServiceAdded);
                e.addEventListener("unregistering", this.listener.onServiceRemoved);
                d = e.getServiceReferences(b);
                for (f = 0; f < d.length; f++) {
                    var c = d[f];
                    o(c) && this.addServiceListener(e.getService(c))
                }
            },
            onDestroy: function () {
                this.destroy()
            },
            destroy: function () {
                if (this.textView) this.textView.removeEventListener("ModelChanging", this.listener.onModelChanging),
                    this.textView.removeEventListener("ModelChanged", this.listener.onModelChanged),
                    this.textView.removeEventListener("Destroy", this.listener.onDestroy),
                    this.textView.removeEventListener("LineStyle", this.listener.onLineStyle),
                    this.textView = null;
                if (this.services) {
                    for (var b = 0; b < this.services.length; b++) this.removeServiceListener(this.services[b]);
                    this.services = null
                }
                if (this.serviceRegistry) this.serviceRegistry.removeEventListener("registered", this.listener.onServiceAdded),
                    this.serviceRegistry.removeEventListener("unregistering", this.listener.onServiceRemoved),
                    this.serviceRegistry = null;
                this.lineStyles = this.listener = null
            },
            onModelChanging: function (b) {
                this.startLine = this.textView.getModel().getLineAtOffset(b.start)
            },
            onModelChanged: function (b) {
                var d = this.startLine;
                (b.addedLineCount || b.removedLineCount) && Array.prototype.splice.apply(this.lineStyles, [d, b.removedLineCount].concat(this._getEmptyStyle(b.addedLineCount)))
            },
            onStyleReady: function (b) {
                var d = b.lineStyles || b.style,
                    b = Number.MAX_VALUE,
                    f = -1,
                    a = this.textView.getModel(),
                    c;
                for (c in d) d.hasOwnProperty(c) && (this.lineStyles[c] = d[c], b = Math.min(b, c), f = Math.max(f, c));
                b = Math.max(b, 0);
                f = Math.min(f, a.getLineCount());
                if (d = this.annotationModel) {
                    for (var e = d.getAnnotations(a.getLineStart(b), a.getLineEnd(f)), m = []; e.hasNext();) {
                        var n = e.next();
                        n.type === "orion.annotation.highlightError" && m.push(n)
                    }
                    e = [];
                    for (n = b; n <= f; n++) {
                        c = n;
                        var j = this.lineStyles[c],
                            j = j && j.errors;
                        c = a.getLineStart(c);
                        if (j)
                            for (var l = 0; l < j.length; l++) {
                                var o = j[l];
                                e.push(p.AnnotationType.createAnnotation("orion.annotation.highlightError", o.start + c, o.end + c))
                            }
                    }
                    d.replaceAnnotations(m, e)
                }
                this.textView.redrawLines(b, f + 1)
            },
            onLineStyle: function (b) {
                function d(a, b) {
                    for (var f = a.length,
                        e = [], h = 0; h < f; h++) {
                        var j = a[h];
                        e.push({
                            start: j.start + b,
                            end: j.end + b,
                            style: j.style
                        })
                    }
                    return e
                }
                var f = this.lineStyles[b.lineIndex];
                if (f)
                    if (f.ranges) b.ranges = d(f.ranges, b.lineStart);
                    else if (f.style) b.style = f.style
            },
            _getEmptyStyle: function (b) {
                for (var d = [], f = 0; f < b; f++) d.push(null);
                return d
            },
            setContentType: function (b) {
                this.contentType = b;
                if (this.services)
                    for (b = 0; b < this.services.length; b++) {
                        var d = this.services[b];
                        if (d.setContentType) {
                            var f = this.serviceRegistry.getService("orion.page.progress");
                            f ? f.progress(d.setContentType(this.contentType), "Styling content type: " + this.contentType.id ? this.contentType.id : this.contentType) : d.setContentType(this.contentType)
                        }
                    }
            },
            onServiceAdded: function (b, d) {
                o(b) && this.addServiceListener(d)
            },
            onServiceRemoved: function (b, d) {
                this.services.indexOf(d) !== -1 && this.removeServiceListener(d)
            },
            addServiceListener: function (b) {
                if (typeof b.addEventListener === "function") {
                    if (b.addEventListener("orion.edit.highlighter.styleReady", this.listener.onStyleReady), this.services.push(b), b.setContentType && this.contentType) {
                        var e = this.serviceRegistry.getService("orion.page.progress");
                        e ? e.progress(b.setContentType(this.contentType), "Styling content type: " + this.contentType.id ? this.contentType.id : this.contentType) : b.setContentType(this.contentType)
                    }
                } else typeof console !== "undefined" && console.log(Error(d))
            },
            removeServiceListener: function (b) {
                typeof b.removeEventListener === "function" ? (b.removeEventListener("orion.edit.highlighter.styleReady", this.listener.onStyleReady), b = this.services.indexOf(b), b !== -1 && this.services.splice(b, 1)) : typeof console !== "undefined" && console.log(Error(d))
            }
        };
        return e
    });
define("orion/editor/mirror", ["i18n!orion/editor/nls/messages", "orion/editor/eventTarget", "orion/editor/annotations"],
    function (l, p, o) {
        function e(b) {
            this.string = b;
            this.tokenStart = this.pos = 0
        }

        function b() {
            this._modes = {};
            this.mimeModes = {};
            this.options = {};
            this.StringStream = e
        }

        function d(b) {
            var a = [],
                c;
            for (c in b) Object.prototype.hasOwnProperty.call(b, c) && a.push(c);
            return a
        }

        function h(b, a, c) {
            c = c || {};
            this.model = b;
            this.codeMirror = a;
            this.isWhitespaceVisible = typeof c.whitespacesVisible === "undefined" ? !1 : c.whitespacesVisible;
            this.mode = null;
            this.isModeLoaded = !1;
            this.lines = [];
            this.dirtyLines = [];
            this.startLine = Number.MAX_VALUE;
            this.endLine = -1;
            this.timer = null;
            this.initialize(b)
        }

        function k(b, a, c) {
            this.init(b, a, c)
        }
        e.prototype = {
            eol: function () {
                return this.pos >= this.string.length
            },
            sol: function () {
                return this.pos === 0
            },
            peek: function () {
                return this.string[this.pos]
            },
            next: function () {
                return this.string[this.pos++]
            },
            eat: function (b) {
                var a = this.string[this.pos];
                return typeof a === "string" && (a === b || b.test && b.test(a) || typeof b === "function" && b(a)) ? this.string[this.pos++] : void 0
            },
            eatWhile: function (b) {
                for (var a = !1; this.eat(b) !== void 0;) a = !0;
                return a
            },
            eatSpace: function () {
                return this.eatWhile(/\s/)
            },
            skipToEnd: function () {
                this.pos = this.string.length
            },
            skipTo: function (b) {
                b = this.string.indexOf(b, this.pos);
                return b !== -1 ? (this.pos = b, !0) : !1
            },
            match: function (b, a, c) {
                a = a === !0 || typeof a === "undefined";
                if (typeof b === "string") {
                    var d = c ? this.string.toLowerCase() : this.string,
                        b = c ? b.toLowerCase() : b,
                        c = d.indexOf(b, this.pos);
                    if (c !== -1 && a) this.pos = c + b.length;
                    return c !== -1
                } else return (b = this.string.substring(this.pos).match(b)) && a && typeof b[0] === "string" && (this.pos += b.index + b[0].length),
                    b
            },
            backUp: function (b) {
                this.pos -= b
            },
            column: function () {
                for (var b = 0,
                    a = 0; a < this.tokenStart;) b += this.string[a++] === "\t" ? 4 : 1;
                return b
            },
            indentation: function () {
                for (var b = this.string.search(/\S/), a = 0, c = 0; c < b;) a += this.string[c++] === "\t" ? 4 : 1;
                return a
            },
            current: function () {
                return this.string.substring(this.tokenStart, this.pos)
            },
            advance: function () {
                this.tokenStart = this.pos
            }
        };
        b.prototype = {
            options: {},
            setOption: function (b, a) {
                this.options[b] = a
            },
            getOption: function (b) {
                return this.options[b]
            },
            copyState: function (b, a) {
                if (typeof b.copyState === "function") return b.copyState(a);
                var c = {},
                    d;
                for (d in a) {
                    var e = a[d];
                    c[d] = e instanceof Array ? e.slice() : e
                }
                return c
            },
            defineMode: function (b, a) {
                this._modes[b] = a
            },
            defineMIME: function (b, a) {
                this.mimeModes[b] = a
            },
            getMode: function (b, a) {
                var c = {},
                    d;
                typeof a === "string" && this.mimeModes[a] && (a = this.mimeModes[a]);
                typeof a === "object" && (c = a, d = this._modes[a.name]);
                d = d || this._modes[a];
                if (typeof d !== "function") throw "Mode not found " + a;
                return d(b, c)
            },
            listModes: function () {
                return d(this._modes)
            },
            listMIMEs: function () {
                return d(this.mimeModes)
            },
            _getModeName: function (b) {
                b = this.mimeModes[b];
                if (typeof b === "object") b = b.name;
                return b
            }
        };
        h.prototype = {
            initialize: function () {
                var b = this;
                this.listener = {
                    onModelChanging: function (a) {
                        b._onModelChanging(a)
                    },
                    onModelChanged: function (a) {
                        b._onModelChanged(a)
                    },
                    onDestroy: function (a) {
                        b._onDestroy(a)
                    }
                };
                this.model.addEventListener("Changing", this.listener.onModelChanging);
                this.model.addEventListener("Changed", this.listener.onModelChanged);
                this.model.addEventListener("Destroy", this.listener.onDestroy)
            },
            destroy: function () {
                this.model && (this.model.removeEventListener("Changing", this.listener.onModelChanging), this.model.removeEventListener("Changed", this.listener.onModelChanged), this.model.removeEventListener("Destroy", this.listener.onDestroy));
                this.dirtyLines = this.lines = this.mode = this.codeMirror = this.model = null;
                clearTimeout(this.timer);
                this.timer = null
            },
            _onModelChanging: function (b) {
                this.startLine = this.model.getLineAtOffset(b.start)
            },
            _onModelChanged: function (b) {
                this._dbgEvent(b);
                var a = this.startLine;
                (b.removedLineCount || b.addedLineCount) && Array.prototype.splice.apply(this.lines, [a + 1, b.removedLineCount].concat(this._newLines(b.addedLineCount)));
                this.mode && (b = Math.max(b.addedLineCount, b.removedLineCount), b = a + Math.min(b, 500), this.highlight(a, b), this.highlightLater(b + 1))
            },
            _onDestroy: function () {
                this.destroy()
            },
            setViewportIndex: function (b) {
                this.viewportIndex = b
            },
            _dbgEvent: function () { },
            _dbgStyle: function () { },
            _newLines: function (b) {
                for (var a = [], c = 0; c < b; c++) a.push({
                    style: null,
                    eolState: null
                });
                return a
            },
            setMode: function (b, a) {
                if (b) this.mode = this.codeMirror.getMode(this.codeMirror.options, b),
                    this.lines = this._newLines(this.model.getLineCount()),
                    a && this.highlight()
            },
            highlight: function (b, a, c) {
                if (this.mode) {
                    for (var d = this.model.getLineCount(), b = typeof b === "undefined" ? 0 : b, a = typeof a === "undefined" ? d - 1 : Math.min(a, d - 1), d = this.mode, e = this.getState(b), h = b; h <= a; h++) {
                        var j = this.lines[h];
                        this.highlightLine(h, j, e);
                        j.eolState = this.codeMirror.copyState(d, e)
                    }
                    this._expandRange(b, a);
                    if (!c) this.onHighlightDone()
                }
            },
            highlightLater: function (b) {
                this.dirtyLines.push(b);
                var a = this;
                this.timer = setTimeout(function () {
                    a._highlightJob()
                },
                    50)
            },
            _highlightJob: function () {
                for (var b = +new Date + 30,
                    a = this.mode.compareStates,
                    c = this.model.getLineCount(); this.dirtyLines.length;) {
                    var d = this.viewportIndex,
                        e = this.lines[d],
                        d = e && !e.eolState ? d : this.dirtyLines.pop();
                    if (d >= c) break;
                    this._expandRange(d, d);
                    for (var e = this._getResumeLineIndex(d), d = e + 1, e = (e = e >= 0 && this.lines[e].eolState) ? this.codeMirror.copyState(this.mode, e) : this.mode.startState(), h = 0, j = d; j < c; j++) {
                        var k = this.lines[j],
                            l = k.eolState,
                            o = this.highlightLine(j, k, e);
                        k.eolState = this.codeMirror.copyState(this.mode, e);
                        o && this._expandRange(d, j + 1);
                        var k = a && l && a(l, k.eolState),
                            p = !a && !o && h++ > 3;
                        if (k || p) break;
                        else if (!l || o) h = 0;
                        l = j < c || this.dirtyLines.length;
                        if (+new Date > b && l) {
                            this.highlightLater(j + 1);
                            this.onHighlightDone();
                            return
                        }
                    }
                }
                this.onHighlightDone()
            },
            onHighlightDone: function () {
                this.startLine !== Number.MAX_VALUE && this.endLine !== -1 && this.dispatchEvent({
                    type: "Highlight",
                    start: this.startLine,
                    end: this.endLine
                });
                this.startLine = Number.MAX_VALUE;
                this.endLine = -1
            },
            _getResumeLineIndex: function (b) {
                for (var a = this.lines,
                    c = b - 1; c >= 0; c--)
                    if (a[c].eolState || b - c > 40) return c;
                return -1
            },
            getState: function (b) {
                var a = this.mode,
                    c = this.lines,
                    d, e;
                for (d = b - 1; d >= 0; d--)
                    if (e = c[d], e.eolState || b - d > 40) break;
                var h = d >= 0 && c[d].eolState;
                if (h) {
                    h = this.codeMirror.copyState(a, h);
                    for (d = Math.max(0, d); d < b - 1; d++) e = c[d],
                        this.highlightLine(d, e, h),
                        e.eolState = this.codeMirror.copyState(a, h);
                    return h
                } else return a.startState()
            },
            highlightLine: function (b, a, c) {
                if (this.mode) {
                    var d = this.model;
                    d.getLineStart(b) === d.getLineEnd(b) && this.mode.blankLine && this.mode.blankLine(c);
                    for (var h = a.style || [], b = d.getLine(b), b = new e(b), d = !a.style, k = [], j = 0; !b.eol(); j++) {
                        var l = this.mode.token(b, c) || null,
                            o = b.current();
                        this._whitespaceStyle(l, o, b.tokenStart);
                        l = [b.tokenStart, b.pos, l];
                        o = h[j];
                        k.push(l);
                        d = d || !o || o[0] !== l[0] || o[1] !== l[1] || o[2] !== l[2];
                        b.advance()
                    }
                    if (d = d || k.length !== h.length) a.style = k.length ? k : null;
                    return d
                }
            },
            _whitespaceStyle: function (b, a, c) {
                if (!b && this.isWhitespaceVisible && /\s+/.test(a)) {
                    for (var b = [], d, e, h = 0; h < a.length; h++) {
                        var j = a[h];
                        j !== e && (e && b.push([c + d, c + h, e === "\t" ? "token_tab" : "token_space"]), d = h, e = j)
                    }
                    b.push([c + d, c + h, e === "\t" ? "token_tab" : "token_space"]);
                    return b
                }
                return null
            },
            _expandRange: function (b, a) {
                this.startLine = Math.min(this.startLine, b);
                this.endLine = Math.max(this.endLine, a)
            },
            toStyleRangesAndErrors: function (b, a) {
                var c = b.style;
                if (!c) return null;
                for (var d = [], e = [], h = typeof a === "undefined" ? 0 : this.model.getLineStart(a), j = 0; j < c.length; j++) {
                    var k = c[j],
                        l = !k[2] ? null : k[2] === "token_tab" || k[2] === "token_space" ? k[2] : "cm-" + k[2];
                    l && (k = {
                        start: h + k[0],
                        end: h + k[1],
                        style: {
                            styleClass: l
                        }
                    },
                        d.push(k), l === "cm-error" && e.push(k))
                }
                return [d, e]
            },
            getLineStyle: function (b) {
                return this.lines[b]
            },
            getLineStyles: function () {
                return this.lines
            }
        };
        p.EventTarget.addMixin(h.prototype);
        o.AnnotationType.registerType("orion.annotation.highlightError", {
            title: l.syntaxError,
            html: "<div class='annotationHTML error'></div>",
            rangeStyle: {
                styleClass: "annotationRange error"
            }
        });
        k.prototype = {
            init: function (b, a, c) {
                this.textView = b;
                this.annotationModel = c;
                this.modeApplier = new h(b.getModel(), a);
                var d = this;
                this.listener = {
                    onLineStyle: function (a) {
                        d.onLineStyle(a)
                    },
                    onDestroy: function (a) {
                        d.onDestroy(a)
                    },
                    onHighlight: function (a) {
                        d.onHighlight(a)
                    }
                };
                b.addEventListener("LineStyle", this.listener.onLineStyle);
                b.addEventListener("Destroy", this.listener.onDestroy);
                this.modeApplier.addEventListener("Highlight", this.listener.onHighlight)
            },
            destroy: function () {
                this.modeApplier && (this.modeApplier.removeEventListener("Highlight", this.listener.onHighlight), this.modeApplier.destroy());
                this.textView && (this.textView.removeEventListener("LineStyle", this.listener.onLineStyle), this.textView.removeEventListener("Destroy", this.listener.onDestroy));
                this.listener = this.modeApplier = this.annotationModel = this.textView = null
            },
            setMode: function (b) {
                this.modeApplier.setMode(b)
            },
            onLineStyle: function (b) {
                var a = b.lineIndex,
                    c = this.modeApplier,
                    d = c.getLineStyle(a);
                if (!d || !d.eolState) {
                    var e = this.textView.getModel().getLineCount();
                    c.highlight(a, Math.min(a + 20, e - 1), !0);
                    d = c.getLineStyle(a)
                }
                e = this.textView.getModel();
                if (d) {
                    var h = c.toStyleRangesAndErrors(d, a);
                    if (h && (b.ranges = h[0], b = this.annotationModel)) {
                        c = [];
                        d = [];
                        if (h = h[1])
                            for (var j = 0; j < h.length; j++) {
                                var k = h[j];
                                k.style.styleClass === "cm-error" && d.push(o.AnnotationType.createAnnotation("orion.annotation.highlightError", k.start, k.end))
                            }
                        for (a = b.getAnnotations(e.getLineStart(a), e.getLineEnd(a)); a.hasNext();) e = a.next(),
                            e.type === "orion.annotation.highlightError" && c.push(e);
                        b.replaceAnnotations(c, d)
                    }
                }
            },
            onHighlight: function (b) {
                this.textView.redrawLines(b.start, b.end)
            },
            onDestroy: function () {
                this.destroy()
            }
        };
        return {
            Mirror: b,
            ModeApplier: h,
            CodeMirrorStyler: k
        }
    });
define("orion/editor/textMateStyler", ["orion/editor/regex"],
    function (l) {
        function p(b) {
            var d;
            if (b instanceof Array) {
                d = Array(b.length);
                for (var e = 0; e < b.length; e++) d[e] = p(b[e])
            } else
                for (e in d = {},
                    b)
                    if (Object.prototype.hasOwnProperty.call(b, e)) {
                        var k = b[e];
                        d[e] = typeof k === "object" && k !== null ? p(k) : k
                    }
            return d
        }

        function o(b, d, e) {
            this.initialize(b);
            this.grammar = p(d);
            this.externalGrammars = e ? p(e) : [];
            this._styles = {};
            this._tree = null;
            this._allGrammars = {};
            this.preprocess(this.grammar)
        }
        var e = {
            unsupported: [{
                regex: /\(\?[ims\-]:/,
                func: function () {
                    return "option on/off for subexp"
                }
            },
            {
                regex: /\(\?<([=!])/,
                func: function (b) {
                    return b[1] === "=" ? "lookbehind" : "negative lookbehind"
                }
            },
            {
                regex: /\(\?>/,
                func: function () {
                    return "atomic group"
                }
            }
            ],
            toRegExp: function (b) {
                function d(a, b) {
                    throw Error('Unsupported regex feature "' + a + '": "' + b[0] + '" at index: ' + b.index + " in " + b.input);
                }
                var h = "",
                    k, b = e.processGlobalFlag("x", b,
                        function (a) {
                            for (var b = "",
                                d = !1,
                                e = a.length,
                                f = 0; f < e;) {
                                var h = a.charAt(f);
                                if (!d && h === "#")
                                    for (; f < e && h !== "\r" && h !== "\n";) h = a.charAt(++f);
                                else if (!d && /\s/.test(h))
                                    for (; f < e && /\s/.test(h);) h = a.charAt(++f);
                                else h === "\\" ? (b += h, /\s/.test(a.charAt(f + 1)) || (b += a.charAt(f + 1), f += 1)) : (h === "[" ? d = !0 : h === "]" && (d = !1), b += h),
                                    f += 1
                            }
                            return b
                        }),
                    b = e.processGlobalFlag("i", b,
                        function (a) {
                            h += "i";
                            return a
                        });
                for (k = 0; k < this.unsupported.length; k++) {
                    var f;
                    (f = this.unsupported[k].regex.exec(b)) && d(this.unsupported[k].func(f), f)
                }
                return RegExp(b, h)
            },
            processGlobalFlag: function (b, d, e) {
                function k(a, b) {
                    for (var d = 0,
                        e = a.length,
                        f = -1,
                        h = b; h < e && f === -1; h++) switch (a.charAt(h)) {
                            case "\\":
                                h++;
                                break;
                            case "(":
                                d++;
                                break;
                            case ")":
                                d--,
                                    d === 0 && (f = h)
                        }
                    return f
                }
                var f = "(?" + b + ")",
                    b = "(?" + b + ":";
                if (d.substring(0, f.length) === f) return e(d.substring(f.length));
                else if (d.substring(0, b.length) === b) {
                    f = k(d, 0);
                    if (f < d.length - 1) throw Error("Only a " + b + ") group that encloses the entire regex is supported in: " + d);
                    return e(d.substring(b.length, f))
                }
                return d
            },
            hasBackReference: function (b) {
                return /\\\d+/.test(b.source)
            },
            getSubstitutedRegex: function (b, d, e) {
                for (var e = typeof e === "undefined" ? !0 : !1, b = b.source.split(/(\\\d+)/g), k = [], f = 0; f < b.length; f++) {
                    var a = b[f],
                        c = /\\(\d+)/.exec(a);
                    c ? (a = d[c[1]] || "", k.push(e ? l.escape(a) : a)) : k.push(a)
                }
                return RegExp(k.join(""))
            },
            groupify: function (b, d) {
                for (var e = b.source,
                    k = e.length,
                    f = [], a = 0, c = [], i = 1, m = 1, l = [], j = {},
                    o = {},
                    p = 0; p < k; p++) {
                    var t = f[f.length - 1],
                        v = e.charAt(p);
                    switch (v) {
                        case "(":
                            if (t === 4) f.pop(),
                                l.push(")"),
                                c[c.length - 1].end = p;
                            var g = p + 2 < k ? e.charAt(p + 1) + "" + e.charAt(p + 2) : null;
                            if (g === "?:" || g === "?=" || g === "?!") {
                                var u;
                                g === "?:" ? u = 1 : (u = 3, a++);
                                f.push(u);
                                c.push({
                                    start: p,
                                    end: -1,
                                    type: u
                                });
                                l.push(v);
                                l.push(g);
                                p += g.length
                            } else f.push(2),
                                c.push({
                                    start: p,
                                    end: -1,
                                    type: 2,
                                    oldNum: i,
                                    num: m
                                }),
                                l.push(v),
                                a === 0 && (o[m] = null),
                                j[i] = m,
                                i++,
                                m++;
                            break;
                        case ")":
                            t = f.pop();
                            t === 3 && a--;
                            c[c.length - 1].end = p;
                            l.push(v);
                            break;
                        case "*":
                        case "+":
                        case "?":
                        case "}":
                            var x = v,
                                s = e.charAt(p - 1),
                                g = p - 1;
                            if (v === "}") {
                                for (u = p - 1; e.charAt(u) !== "{" && u >= 0; u--);
                                s = e.charAt(u - 1);
                                g = u - 1;
                                x = e.substring(u, p + 1)
                            }
                            u = c[c.length - 1];
                            if (s === ")" && (u.type === 2 || u.type === 4)) {
                                l.splice(u.start, 0, "(");
                                l.push(x);
                                l.push(")");
                                v = {
                                    start: u.start,
                                    end: l.length - 1,
                                    type: 4,
                                    num: u.num
                                };
                                for (s = 0; s < c.length; s++)
                                    if (t = c[s], (t.type === 2 || t.type === 4) && t.start >= u.start && t.end <= g)
                                        if (t.start += 1, t.end += 1, t.num += 1, t.type === 2) j[t.oldNum] = t.num;
                                c.push(v);
                                m++;
                                break
                            }
                        default:
                            v !== "|" && t !== 2 && t !== 4 && a === 0 && (f.push(4), c.push({
                                start: p,
                                end: -1,
                                type: 4,
                                num: m
                            }), l.push("("), o[m] = null, m++),
                                l.push(v),
                                v === "\\" && (v = e.charAt(p + 1), l.push(v), p += 1)
                    }
                }
                for (; f.length;) f.pop(),
                    l.push(")");
                var e = RegExp(l.join("")),
                    k = {},
                    d = d || j,
                    C;
                for (C in d) d.hasOwnProperty(C) && (k[C] = "\\" + d[C]);
                e = this.getSubstitutedRegex(e, k, !1);
                return [e, j, o]
            },
            complexCaptures: function (b) {
                if (!b) return !1;
                for (var d in b)
                    if (b.hasOwnProperty(d) && d !== "0") return !0;
                return !1
            }
        };
        o.prototype = {
            initialize: function (b) {
                this.textView = b;
                this.textView.stylerOptions = this;
                var d = this;
                this._listener = {
                    onModelChanged: function (b) {
                        d.onModelChanged(b)
                    },
                    onDestroy: function (b) {
                        d.onDestroy(b)
                    },
                    onLineStyle: function (b) {
                        d.onLineStyle(b)
                    },
                    onStorage: function (b) {
                        d.onStorage(b)
                    }
                };
                b.addEventListener("ModelChanged", this._listener.onModelChanged);
                b.addEventListener("Destroy", this._listener.onDestroy);
                b.addEventListener("LineStyle", this._listener.onLineStyle);
                b.redrawLines()
            },
            onDestroy: function () {
                this.destroy()
            },
            destroy: function () {
                if (this.textView) this.textView.removeEventListener("ModelChanged", this._listener.onModelChanged),
                    this.textView.removeEventListener("Destroy", this._listener.onDestroy),
                    this.textView.removeEventListener("LineStyle", this._listener.onLineStyle),
                    this.textView = null;
                this._listener = this._tree = this._styles = this.grammar = null
            },
            preprocess: function (b) {
                for (b = [b]; b.length !== 0;) {
                    var d = b.pop();
                    if (!d._resolvedRule || !d._typedRule)
                        if (d._resolvedRule = this._resolve(d), d._typedRule = this._createTypedRule(d), this.addStyles(d.name), this.addStyles(d.contentName), this.addStylesForCaptures(d.captures), this.addStylesForCaptures(d.beginCaptures), this.addStylesForCaptures(d.endCaptures), d._resolvedRule !== d && b.push(d._resolvedRule), d.patterns)
                            for (var e = 0; e < d.patterns.length; e++) b.push(d.patterns[e])
                }
            },
            addStyles: function (b) {
                if (b && !this._styles[b]) {
                    this._styles[b] = [];
                    for (var d = b.split("."), e = 0; e < d.length; e++) this._styles[b].push(d.slice(0, e + 1).join("-"))
                }
            },
            addStylesForCaptures: function (b) {
                for (var d in b) b.hasOwnProperty(d) && this.addStyles(b[d].name)
            },
            ContainerRule: function () {
                function b(b) {
                    this.rule = b;
                    this.subrules = b.patterns
                }
                b.prototype.valueOf = function () {
                    return "aa"
                };
                return b
            }(),
            BeginEndRule: function () {
                function b(b) {
                    this.rule = b;
                    this.beginRegex = e.toRegExp(b.begin);
                    this.endRegex = e.toRegExp(b.end);
                    this.subrules = b.patterns || [];
                    this.endRegexHasBackRef = e.hasBackReference(this.endRegex);
                    var h = e.complexCaptures(b.captures),
                        b = e.complexCaptures(b.beginCaptures) || e.complexCaptures(b.endCaptures);
                    if (this.isComplex = h || b) h = e.groupify(this.beginRegex),
                        this.beginRegex = h[0],
                        this.beginOld2New = h[1],
                        this.beginConsuming = h[2],
                        h = e.groupify(this.endRegex, this.beginOld2New),
                        this.endRegex = h[0],
                        this.endOld2New = h[1],
                        this.endConsuming = h[2]
                }
                b.prototype.valueOf = function () {
                    return this.beginRegex
                };
                return b
            }(),
            MatchRule: function () {
                function b(b) {
                    this.rule = b;
                    this.matchRegex = e.toRegExp(b.match);
                    if (this.isComplex = e.complexCaptures(b.captures)) b = e.groupify(this.matchRegex),
                        this.matchRegex = b[0],
                        this.matchOld2New = b[1],
                        this.matchConsuming = b[2]
                }
                b.prototype.valueOf = function () {
                    return this.matchRegex
                };
                return b
            }(),
            _createTypedRule: function (b) {
                return b.match ? new this.MatchRule(b) : b.begin ? new this.BeginEndRule(b) : new this.ContainerRule(b)
            },
            _resolve: function (b) {
                var d = b;
                if (b.include) {
                    if (b.begin || b.end || b.match) throw Error('Unexpected regex pattern in "include" rule ' + b.include);
                    b = b.include;
                    if (b.charAt(0) === "#") {
                        if (d = this.grammar.repository && this.grammar.repository[b.substring(1)], !d) throw Error("Couldn't find included rule " + b + " in grammar repository");
                    } else if (b === "$self") d = this.grammar;
                    else if (b === "$base") throw Error('Include "$base" is not supported');
                    else if (d = this._allGrammars[b], !d)
                        for (var e = 0; e < this.externalGrammars.length; e++) {
                            var k = this.externalGrammars[e];
                            if (k.scopeName === b) {
                                this.preprocess(k);
                                d = this._allGrammars[b] = k;
                                break
                            }
                        }
                }
                return d
            },
            ContainerNode: function () {
                function b(b, e) {
                    this.parent = b;
                    this.rule = e;
                    this.children = [];
                    this.end = this.start = null
                }
                b.prototype.addChild = function (b) {
                    this.children.push(b)
                };
                b.prototype.valueOf = function () {
                    var b = this.rule;
                    return "ContainerNode { " + (b.include || "") + " " + (b.name || "") + (b.comment || "") + "}"
                };
                return b
            }(),
            BeginEndNode: function () {
                function b(b, h, k) {
                    this.parent = b;
                    this.rule = h;
                    this.children = [];
                    this.setStart(k);
                    this.endMatch = this.end = null;
                    this.endRegexSubstituted = h.endRegexHasBackRef ? e.getSubstitutedRegex(h.endRegex, k) : null
                }
                b.prototype.addChild = function (b) {
                    this.children.push(b)
                };
                b.prototype.getIndexInParent = function () {
                    return this.parent ? this.parent.children.indexOf(this) : -1
                };
                b.prototype.setStart = function (b) {
                    this.start = b.index;
                    this.beginMatch = b
                };
                b.prototype.setEnd = function (b) {
                    b && typeof b === "object" ? (this.endMatch = b, this.end = b.index + b[0].length) : (this.endMatch = null, this.end = b)
                };
                b.prototype.shiftStart = function (b) {
                    this.start += b;
                    this.beginMatch.index += b
                };
                b.prototype.shiftEnd = function (b) {
                    this.end += b;
                    this.endMatch && (this.endMatch.index += b)
                };
                b.prototype.valueOf = function () {
                    return "{" + this.rule.beginRegex + " range=" + this.start + ".." + this.end + "}"
                };
                return b
            }(),
            push: function (b, d) {
                if (d)
                    for (var e = d.length; e > 0;) b.push(d[--e])
            },
            exec: function (b, d, e) {
                (d = b.exec(d)) && (d.index += e);
                b.lastIndex = 0;
                return d
            },
            afterMatch: function (b) {
                return b.index + b[0].length
            },
            getEndMatch: function (b, d, e) {
                if (b instanceof this.BeginEndNode) {
                    var k = b.rule,
                        b = b.endRegexSubstituted || k.endRegex;
                    return !b ? null : this.exec(b, d, e)
                }
                return null
            },
            initialParse: function () {
                this.textView.getModel().getCharCount();
                this._tree = new this.ContainerNode(null, this.grammar._typedRule);
                this.parse(this._tree, !1, 0)
            },
            onModelChanged: function (b) {
                var d = b.addedCharCount,
                    e = b.removedCharCount,
                    b = b.start;
                if (this._tree) {
                    var k = this.textView.getModel(),
                        f = k.getCharCount(),
                        k = k.getLineEnd(k.getLineAtOffset(b) - 1),
                        a = this.getFirstDamaged(k, k),
                        k = k === -1 ? 0 : k,
                        d = a ? this.parse(a, !0, k, b, d, e) : f;
                    this.textView.redrawRange(k, d)
                } else this.initialParse()
            },
            getFirstDamaged: function (b, d) {
                if (b < 0) return this._tree;
                for (var e = [this._tree], k = null; e.length;) {
                    var f = e.pop();
                    if (!f.parent || this.isDamaged(f, b, d)) {
                        f instanceof this.BeginEndNode && (k = f);
                        for (var a = 0; a < f.children.length; a++) e.push(f.children[a])
                    }
                }
                return k || this._tree
            },
            isDamaged: function (b, d, e) {
                return b.start <= e && b.end > d
            },
            parse: function (b, d, e, k, f, a) {
                var c = this.textView.getModel(),
                    i = c.getLineStart(c.getLineCount() - 1),
                    l = c.getCharCount(),
                    n = this.getInitialExpected(b, e),
                    j = -1;
                if (d) b.repaired = !0,
                    b.endNeedsUpdate = !0,
                    j = (j = b.children[b.children.length - 1]) ? c.getLineEnd(c.getLineAtOffset(j.end + (f - a))) : -1,
                    k = c.getLineEnd(c.getLineAtOffset(k + a)),
                    j = Math.max(j, k);
                for (var j = j === -1 ? l : j, k = n, o = b, p = !1, t = e, v = -1; o && (!d || t < j);) {
                    var g = this.getNextMatch(c, o, t);
                    g || (t = t >= i ? l : c.getLineStart(c.getLineAtOffset(t) + 1));
                    var u = g && g.match,
                        x = g && g.rule,
                        s = g && g.isEnd;
                    if (g && g.isSub) {
                        if (t = this.afterMatch(u), x instanceof this.BeginEndRule) p = !0,
                            d && x === k.rule && o === k.parent ? (o = k, o.setStart(u), o.repaired = !0, o.endNeedsUpdate = !0, k = this.getNextExpected(k, "begin")) : (d && (this.prune(o, k), d = !1), u = new this.BeginEndNode(o, x, u), o.addChild(u), o = u)
                    } else if (s || t === l) {
                        if (o instanceof this.BeginEndNode) u ? (p = !0, v = Math.max(v, o.end), o.setEnd(u), t = this.afterMatch(u), d && o === k && o.parent === k.parent ? (o.repaired = !0, delete o.endNeedsUpdate, k = this.getNextExpected(k, "end")) : d && (this.prune(o, k), d = !1)) : (o.setEnd(l), delete o.endNeedsUpdate);
                        o = o.parent
                    }
                    d && t >= j && !p && (this.prune(b, n), d = !1)
                }
                this.removeUnrepairedChildren(b, d, e);
                this.cleanup(d, b, e, j, l, f, a);
                return d ? Math.max(v, t) : t
            },
            removeUnrepairedChildren: function (b, d, e) {
                if (d) {
                    for (var d = b.children,
                        k = -1,
                        f = 0; f < d.length; f++) {
                        var a = d[f];
                        if (!a.repaired && this.isDamaged(a, e, Number.MAX_VALUE)) {
                            k = f;
                            break
                        }
                    }
                    if (k !== -1) b.children.length = k
                }
            },
            cleanup: function (b, d, e, k, f, a, c) {
                if (b) {
                    b = a - c;
                    f = this.getIntersecting(k - b + 1, f);
                    d = this.getIntersecting(e, k);
                    for (e = 0; e < f.length; e++) k = f[e],
                        !k.repaired && k instanceof this.BeginEndNode && (k.shiftEnd(b), k.shiftStart(b));
                    for (e = 0; e < d.length; e++) k = d[e],
                        k.repaired && k.endNeedsUpdate && k.shiftEnd(b),
                        delete k.endNeedsUpdate,
                        delete k.repaired
                } else {
                    d = this.getIntersecting(e, k);
                    for (e = 0; e < d.length; e++) delete d[e].repaired
                }
            },
            getNextMatch: function (b, d, e, k) {
                var f = b.getLineAtOffset(e),
                    f = b.getLineEnd(f),
                    a = b.getText(e, f),
                    c = [],
                    i = [],
                    b = [],
                    f = [];
                for (this.push(c, d.rule.subrules); c.length;) {
                    var l = c.length ? c.pop() : null,
                        l = l && l._resolvedRule._typedRule;
                    if (l instanceof this.ContainerRule && i.indexOf(l) === -1) i.push(l),
                        this.push(c, l.subrules);
                    else if (!l || !k || l.matchRegex) {
                        var n = l && this.exec(l.matchRegex || l.beginRegex, a, e);
                        n && (b.push(n), f.push(l))
                    }
                }
                c = Number.MAX_VALUE;
                i = -1;
                for (l = 0; l < b.length; l++)
                    if (n = b[l], n.index < c) c = n.index,
                        i = l;
                if (!k && (e = this.getEndMatch(d, a, e)))
                    if (k = d.rule.applyEndPatternLast, i === -1 || e.index < c || !k && e.index === c) return {
                        isEnd: !0,
                        rule: d.rule,
                        match: e
                    };
                return i === -1 ? null : {
                    isSub: !0,
                    rule: f[i],
                    match: b[i]
                }
            },
            getInitialExpected: function (b, d) {
                var e, k;
                if (b === this._tree)
                    for (e = 0; e < b.children.length; e++) {
                        if (k = b.children[e], k.start >= d) return k
                    } else if (b instanceof this.BeginEndNode && b.endMatch) {
                        var f = b.endMatch.index;
                        for (e = 0; e < b.children.length; e++)
                            if (k = b.children[e], k.start >= d) break;
                        if (k && k.start < f) return k
                    }
                return b
            },
            getNextExpected: function (b, d) {
                if (d === "begin") {
                    var e = b.children[0];
                    return e ? e : b
                } else if (d === "end" && (e = b.parent)) {
                    var k = e.children[e.children.indexOf(b) + 1];
                    return k ? k : e
                }
                return null
            },
            prune: function (b, d) {
                if (d.parent === b) b.children.length = d.getIndexInParent();
                else if (b instanceof this.BeginEndNode) b.endMatch = null,
                    b.end = null;
                if (b.parent) b.parent.children.length = b.getIndexInParent() + 1
            },
            onLineStyle: function (b) {
                this._tree || this.initialParse();
                var d = b.lineStart,
                    e = this.textView.getModel(),
                    k = e.getLineEnd(b.lineIndex),
                    f = e.getLineEnd(e.getLineAtOffset(d) - 1),
                    f = this.getFirstDamaged(f, f),
                    d = this.getLineScope(e, f, d, k);
                b.ranges = this.toStyleRanges(d);
                b.ranges.sort(function (a, b) {
                    return a.start - b.start
                })
            },
            getLineScope: function (b, d, e, k) {
                for (var f = e,
                    a = this.getInitialExpected(d, e), c = [], i = []; d && f < k;) {
                    var l = this.getNextMatch(b, d, f);
                    if (!l) break;
                    var n = l && l.match,
                        j = l && l.rule,
                        o = l && l.isSub,
                        l = l && l.isEnd;
                    n.index !== f && i.push({
                        start: f,
                        end: n.index,
                        node: d
                    });
                    if (o) f = this.afterMatch(n),
                        j instanceof this.BeginEndRule ? (this.addBeginScope(c, n, j), d = a, a = this.getNextExpected(a, "begin")) : this.addMatchScope(c, n, j);
                    else if (l) f = this.afterMatch(n),
                        this.addEndScope(c, n, j),
                        a = this.getNextExpected(a, "end"),
                        d = d.parent
                }
                f < k && i.push({
                    start: f,
                    end: k,
                    node: d
                });
                b = this.getInheritedLineScope(i, e, k);
                return c.concat(b)
            },
            getInheritedLineScope: function (b) {
                for (var d = [], e = 0; e < b.length; e++)
                    for (var k = b[e], f = k.node; f;) {
                        var a = f.rule.rule,
                            c = a.name;
                        if (a = a.contentName || c) {
                            this.addScopeRange(d, k.start, k.end, a);
                            break
                        }
                        f = f.parent
                    }
                return d
            },
            addBeginScope: function (b, d, e) {
                var k = e.rule;
                this.addCapturesScope(b, d, k.beginCaptures || k.captures, e.isComplex, e.beginOld2New, e.beginConsuming)
            },
            addEndScope: function (b, d, e) {
                var k = e.rule;
                this.addCapturesScope(b, d, k.endCaptures || k.captures, e.isComplex, e.endOld2New, e.endConsuming)
            },
            addMatchScope: function (b, d, e) {
                var k = e.rule,
                    f = k.name;
                (k = k.captures) ? this.addCapturesScope(b, d, k, e.isComplex, e.matchOld2New, e.matchConsuming) : this.addScope(b, d, f)
            },
            addScope: function (b, d, e) {
                e && b.push({
                    start: d.index,
                    end: this.afterMatch(d),
                    scope: e
                })
            },
            addScopeRange: function (b, d, e, k) {
                k && b.push({
                    start: d,
                    end: e,
                    scope: k
                })
            },
            addCapturesScope: function (b, d, e, k, f, a) {
                if (e)
                    if (k) {
                        for (var k = {
                            1: 0
                        },
                            c = 0, i = 1; d[i] !== void 0; i++) a[i] !== void 0 && (c += d[i].length),
                                d[i + 1] !== void 0 && (k[i + 1] = c);
                        a = d.index;
                        for (c = 1; e[c]; c++) {
                            var i = e[c].name,
                                l = f[c],
                                n = a + k[l];
                            typeof d[l] !== "undefined" && this.addScopeRange(b, n, n + d[l].length, i)
                        }
                    } else this.addScope(b, d, e[0] && e[0].name)
            },
            getIntersecting: function (b, d) {
                for (var e = [], k = this._tree ? [this._tree] : []; k.length;) {
                    var f = k.pop(),
                        a = !1;
                    f instanceof this.ContainerNode ? a = !0 : this.isDamaged(f, b, d) && (a = !0, e.push(f));
                    if (a)
                        for (var a = f.children.length,
                            c = 0; c < a; c++) k.push(f.children[c])
                }
                return e.reverse()
            },
            toStyleRanges: function (b) {
                for (var d = [], e = 0; e < b.length; e++) {
                    var k = b[e],
                        f = this._styles[k.scope];
                    if (!f) throw Error("styles not found for " + k.scope);
                    f = f.join(" ");
                    d.push({
                        start: k.start,
                        end: k.end,
                        style: {
                            styleClass: f
                        }
                    })
                }
                return d
            }
        };
        return {
            RegexUtil: e,
            TextMateStyler: o
        }
    });
define("orion/editor/htmlGrammar", [],
    function () {
        return {
            HtmlGrammar: function () {
                return {
                    scopeName: "source.html",
                    uuid: "3B5C76FB-EBB5-D930-F40C-047D082CE99B",
                    patterns: [{
                        begin: "<!(doctype|DOCTYPE)",
                        end: ">",
                        contentName: "entity.name.tag.doctype.html",
                        beginCaptures: {
                            0: {
                                name: "entity.name.tag.doctype.html"
                            }
                        },
                        endCaptures: {
                            0: {
                                name: "entity.name.tag.doctype.html"
                            }
                        }
                    },
                    {
                        begin: "<\!--",
                        end: "--\>",
                        beginCaptures: {
                            0: {
                                name: "punctuation.definition.comment.html"
                            }
                        },
                        endCaptures: {
                            0: {
                                name: "punctuation.definition.comment.html"
                            }
                        },
                        patterns: [{
                            match: "--",
                            name: "invalid.illegal.badcomment.html"
                        }],
                        contentName: "comment.block.html"
                    },
                    {
                        match: "<[A-Za-z0-9_\\-:]+(?= ?)",
                        name: "entity.name.tag.html"
                    },
                    {
                        include: "#attrName"
                    },
                    {
                        include: "#qString"
                    },
                    {
                        include: "#qqString"
                    },
                    {
                        include: "#entity"
                    },
                    {
                        match: "</[A-Za-z0-9_\\-:]+>",
                        name: "entity.name.tag.html"
                    },
                    {
                        match: ">",
                        name: "entity.name.tag.html"
                    }
                    ],
                    repository: {
                        attrName: {
                            match: "[A-Za-z\\-:]+(?=\\s*=\\s*['\"])",
                            name: "entity.other.attribute.name.html"
                        },
                        qqString: {
                            match: '(")[^"]+(")',
                            name: "string.quoted.double.html"
                        },
                        qString: {
                            match: "(')[^']+(')",
                            name: "string.quoted.single.html"
                        },
                        entity: {
                            match: "&[A-Za-z0-9]+;",
                            name: "constant.character.entity.html"
                        }
                    }
                }
            }
        }
    });
define("examples/editor/textStyler", ["orion/editor/annotations", "orion/editor/keywords"],
    function (l, p) {
        function o(a, b) {
            this.keywords = a;
            this.whitespacesVisible = b;
            this.setText("")
        }

        function e() {
            o.call(this, null, !0)
        }

        function b(a) {
            o.call(this, null, a)
        }

        function d() {
            o.call(this, null, !1)
        }

        function h(c, g, h) {
            this.commentStart = "/*";
            this.commentEnd = "*/";
            var i = [];
            switch (g) {
                case "java":
                    i = f;
                    break;
                case "js":
                    i = k;
                    break;
                case "css":
                    i = a
            }
            this.whitespacesVisible = !1;
            this.detectHyperlinks = !0;
            this.highlightCaretLine = !1;
            this.detectTasks = this.foldingEnabled = !0;
            this._scanner = new o(i, this.whitespacesVisible);
            this._firstScanner = new d;
            this._commentScanner = new b(this.whitespacesVisible);
            this._whitespaceScanner = new e;
            if (g === "css") this._scanner.isCSS = !0,
                this._firstScanner.isCSS = !0;
            this.view = c;
            this.annotationModel = h;
            this._bracketAnnotations = void 0;
            var j = this;
            this._listener = {
                onChanged: function (a) {
                    j._onModelChanged(a)
                },
                onDestroy: function (a) {
                    j._onDestroy(a)
                },
                onLineStyle: function (a) {
                    j._onLineStyle(a)
                },
                onMouseDown: function (a) {
                    j._onMouseDown(a)
                },
                onSelection: function (a) {
                    j._onSelection(a)
                }
            };
            g = c.getModel();
            g.getBaseModel && (g = g.getBaseModel());
            g.addEventListener("Changed", this._listener.onChanged);
            c.addEventListener("MouseDown", this._listener.onMouseDown);
            c.addEventListener("Selection", this._listener.onSelection);
            c.addEventListener("Destroy", this._listener.onDestroy);
            c.addEventListener("LineStyle", this._listener.onLineStyle);
            this._computeComments();
            this._computeFolding();
            c.redrawLines()
        }
        var k = p.JSKeywords,
            f = p.JAVAKeywords,
            a = p.CSSKeywords,
            c = {
                styleClass: "token_singleline_comment"
            },
            i = {
                styleClass: "token_multiline_comment"
            },
            m = {
                styleClass: "token_doc_comment"
            },
            n = {
                styleClass: "token_doc_html_markup"
            },
            j = {
                styleClass: "token_task_tag"
            },
            q = {
                styleClass: "token_doc_tag"
            },
            r = {
                styleClass: "token_string"
            },
            t = {
                styleClass: "token_number"
            },
            v = {
                styleClass: "token_keyword"
            },
            g = {
                styleClass: "token_space"
            },
            u = {
                styleClass: "token_tab"
            },
            x = {
                styleClass: "line_caret"
            };
        o.prototype = {
            getOffset: function () {
                return this.offset
            },
            getStartOffset: function () {
                return this.startOffset
            },
            getData: function () {
                return this.text.substring(this.startOffset, this.offset)
            },
            getDataLength: function () {
                return this.offset - this.startOffset
            },
            _default: function (a) {
                switch (a) {
                    case 32:
                    case 9:
                        if (this.whitespacesVisible) return a === 32 ? 11 : 10;
                        do a = this._read();
                        while (a === 32 || a === 9);
                        this._unread(a);
                        return 9;
                    case 123:
                    case 125:
                    case 40:
                    case 41:
                    case 91:
                    case 93:
                    case 60:
                    case 62:
                        return a;
                    default:
                        var b = this.isCSS,
                            c = this.offset - 1;
                        if (!b && 48 <= a && a <= 57) {
                            var d = b = !1,
                                e = !1,
                                f = a;
                            do
                                if (a = this._read(), a === 46 && !b) b = !0;
                                else if (a === 101 && !d) b = d = !0,
                                    a = this._read(),
                                    a !== 45 && this._unread(a);
                                else if (a === 120 && f === 48 && this.offset - c === 2) b = d = e = !0;
                                else if (!(48 <= a && a <= 57 || e && (65 <= a && a <= 70 || 97 <= a && a <= 102))) break;
                            while (1);
                            this._unread(a);
                            return 3
                        }
                        if (97 <= a && a <= 122 || 65 <= a && a <= 90 || a === 95 || 45 === a && b) {
                            do a = this._read();
                            while (97 <= a && a <= 122 || 65 <= a && a <= 90 || a === 95 || 48 <= a && a <= 57 || 45 === a && b);
                            this._unread(a);
                            a = this.keywords;
                            if (a.length > 0) {
                                c = this.text.substring(c, this.offset);
                                for (b = 0; b < a.length; b++)
                                    if (this.keywords[b] === c) return 2
                            }
                        }
                        return 1
                }
            },
            _read: function () {
                return this.offset < this.text.length ? this.text.charCodeAt(this.offset++) : -1
            },
            _unread: function (a) {
                a !== -1 && this.offset--
            },
            nextToken: function () {
                for (this.startOffset = this.offset; ;) {
                    var a = this._read(),
                        b;
                    switch (a) {
                        case -1:
                            return null;
                        case 47:
                            a = this._read();
                            if (!this.isCSS && a === 47)
                                for (; ;)
                                    if (a = this._read(), a === -1 || a === 10 || a === 13) return this._unread(a),
                                        6;
                            if (a === 42) {
                                a = this._read();
                                b = 7;
                                for (a === 42 && (b = 8); ;) {
                                    for (; a === 42;)
                                        if (a = this._read(), a === 47) return b;
                                    if (a === -1) return this._unread(a),
                                        b;
                                    a = this._read()
                                }
                            }
                            this._unread(a);
                            return 1;
                        case 39:
                            for (b = 4; ;) switch (a = this._read(), a) {
                                case 39:
                                    return b;
                                case 13:
                                case 10:
                                case -1:
                                    return this._unread(a),
                                        b;
                                case 92:
                                    switch (a = this._read(), a) {
                                        case 10:
                                            b = 5;
                                            break;
                                        case 13:
                                            b = 5,
                                                a = this._read(),
                                                a !== 10 && this._unread(a)
                                    }
                            }
                            break;
                        case 34:
                            for (b = 4; ;) switch (a = this._read(), a) {
                                case 34:
                                    return b;
                                case 13:
                                case 10:
                                case -1:
                                    return this._unread(a),
                                        b;
                                case 92:
                                    switch (a = this._read(), a) {
                                        case 10:
                                            b = 5;
                                            break;
                                        case 13:
                                            b = 5,
                                                a = this._read(),
                                                a !== 10 && this._unread(a)
                                    }
                            }
                            break;
                        default:
                            return this._default(a)
                    }
                }
            },
            setText: function (a) {
                this.text = a;
                this.startOffset = this.offset = 0
            }
        };
        e.prototype = new o(null);
        e.prototype.nextToken = function () {
            for (this.startOffset = this.offset; ;) {
                var a = this._read();
                switch (a) {
                    case -1:
                        return null;
                    case 32:
                        return 11;
                    case 9:
                        return 10;
                    default:
                        do a = this._read();
                        while (!(a === 32 || a === 9 || a === -1));
                        this._unread(a);
                        return 1
                }
            }
        };
        b.prototype = new o(null);
        b.prototype.setType = function (a) {
            this._type = a
        };
        b.prototype.nextToken = function () {
            for (this.startOffset = this.offset; ;) {
                var a = this._read();
                switch (a) {
                    case -1:
                        return null;
                    case 32:
                    case 9:
                        if (this.whitespacesVisible) return a === 32 ? 11 : 10;
                        do a = this._read();
                        while (a === 32 || a === 9);
                        this._unread(a);
                        return 9;
                    case 60:
                        if (this._type === 8) {
                            do a = this._read();
                            while (!(a === 62 || a === -1));
                            if (a === 62) return 12
                        }
                        return 1;
                    case 64:
                        if (this._type === 8) {
                            do a = this._read();
                            while (97 <= a && a <= 122 || 65 <= a && a <= 90 || a === 95 || 48 <= a && a <= 57);
                            this._unread(a);
                            return 13
                        }
                        return 1;
                    case 84:
                        if ((a = this._read()) === 79)
                            if ((a = this._read()) === 68)
                                if ((a = this._read()) === 79)
                                    if (a = this._read(), !(97 <= a && a <= 122 || 65 <= a && a <= 90 || a === 95 || 48 <= a && a <= 57)) return this._unread(a),
                                        14;
                        this._unread(a);
                    default:
                        do a = this._read();
                        while (!(a === 32 || a === 9 || a === -1 || a === 60 || a === 64 || a === 84));
                        this._unread(a);
                        return 1
                }
            }
        };
        d.prototype = new o(null);
        d.prototype._default = function (a) {
            for (; ;) switch (a = this._read(), a) {
                case 47:
                case 34:
                case 39:
                case -1:
                    return this._unread(a),
                        1
            }
        };
        h.prototype = {
            destroy: function () {
                var a = this.view;
                if (a) {
                    var b = a.getModel();
                    b.getBaseModel && (b = b.getBaseModel());
                    b.removeEventListener("Changed", this._listener.onChanged);
                    a.removeEventListener("MouseDown", this._listener.onMouseDown);
                    a.removeEventListener("Selection", this._listener.onSelection);
                    a.removeEventListener("Destroy", this._listener.onDestroy);
                    a.removeEventListener("LineStyle", this._listener.onLineStyle);
                    this.view = null
                }
            },
            setHighlightCaretLine: function (a) {
                this.highlightCaretLine = a
            },
            setWhitespacesVisible: function (a) {
                this.whitespacesVisible = a;
                this._scanner.whitespacesVisible = a;
                this._commentScanner.whitespacesVisible = a
            },
            setDetectHyperlinks: function (a) {
                this.detectHyperlinks = a
            },
            setFoldingEnabled: function (a) {
                this.foldingEnabled = a
            },
            setDetectTasks: function (a) {
                this.detectTasks = a
            },
            _binarySearch: function (a, b, c, d, e) {
                var f;
                d === void 0 && (d = -1);
                if (e === void 0) e = a.length;
                for (; e - d > 1;)
                    if (f = Math.floor((e + d) / 2), b <= a[f].start) e = f;
                    else if (c && b < a[f].end) {
                        e = f;
                        break
                    } else d = f;
                return e
            },
            _computeComments: function () {
                var a = this.view.getModel();
                a.getBaseModel && (a = a.getBaseModel());
                this.comments = this._findComments(a.getText())
            },
            _computeFolding: function () {
                if (this.foldingEnabled) {
                    var a = this.view.getModel();
                    if (a.getBaseModel) {
                        var b = this.annotationModel;
                        if (b) {
                            b.removeAnnotations(l.AnnotationType.ANNOTATION_FOLDING);
                            for (var c = [], d = a.getBaseModel(), e = this.comments, f = 0; f < e.length; f++) {
                                var g = e[f];
                                (g = this._createFoldingAnnotation(a, d, g.start, g.end)) && c.push(g)
                            }
                            b.replaceAnnotations(null, c)
                        }
                    }
                }
            },
            _createFoldingAnnotation: function (a, b, c, d) {
                var e = b.getLineAtOffset(c),
                    b = b.getLineAtOffset(d);
                return e === b ? null : new (l.AnnotationType.getType(l.AnnotationType.ANNOTATION_FOLDING))(c, d, a)
            },
            _computeTasks: function (a, b, c) {
                if (this.detectTasks) {
                    var d = this.annotationModel;
                    if (d) {
                        var e = this.view.getModel(),
                            f = e;
                        e.getBaseModel && (f = e.getBaseModel());
                        for (var g = d.getAnnotations(b, c), e = [], h = l.AnnotationType.ANNOTATION_TASK; g.hasNext();) {
                            var i = g.next();
                            i.type === h && e.push(i)
                        }
                        g = [];
                        i = this._commentScanner;
                        i.setText(f.getText(b, c));
                        for (var j; j = i.nextToken();) {
                            var k = i.getStartOffset() + b;
                            j === 14 && (j = f.getLineEnd(f.getLineAtOffset(k)), a !== 6 && (j = Math.min(j, c - this.commentEnd.length)), g.push(l.AnnotationType.createAnnotation(h, k, j, f.getText(k, j))))
                        }
                        d.replaceAnnotations(e, g)
                    }
                }
            },
            _getLineStyle: function (a) {
                if (this.highlightCaretLine) {
                    var b = this.view,
                        c = b.getModel(),
                        b = b.getSelection();
                    if (b.start === b.end && c.getLineAtOffset(b.start) === a) return x
                }
                return null
            },
            _getStyles: function (a, b, c) {
                a.getBaseModel && (c = a.mapOffset(c));
                for (var d = c + b.length,
                    e = [], f = c, g = this.comments, h = this._binarySearch(g, c, !0); h < g.length; h++) {
                    if (g[h].start >= d) break;
                    var j = g[h].start,
                        k = g[h].end;
                    f < j && this._parse(b.substring(f - c, j - c), f, e);
                    var l = g[h].type,
                        n;
                    switch (l) {
                        case 8:
                            n = m;
                            break;
                        case 7:
                            n = i;
                            break;
                        case 5:
                            n = r
                    }
                    f = Math.max(f, j);
                    j = Math.min(d, k);
                    (l === 8 || l === 7) && (this.whitespacesVisible || this.detectHyperlinks) ? this._parseComment(b.substring(f - c, j - c), f, e, n, l) : l === 5 && this.whitespacesVisible ? this._parseString(b.substring(f - c, j - c), f, e, r) : e.push({
                        start: f,
                        end: j,
                        style: n
                    });
                    f = k
                }
                f < d && this._parse(b.substring(f - c, d - c), f, e);
                if (a.getBaseModel)
                    for (b = 0; b < e.length; b++) c = e[b].end - e[b].start,
                        e[b].start = a.mapOffset(e[b].start, !0),
                        e[b].end = e[b].start + c;
                return e
            },
            _parse: function (a, b, d) {
                var e = this._scanner;
                for (e.setText(a); a = e.nextToken();) {
                    var f = e.getStartOffset() + b,
                        h = null;
                    switch (a) {
                        case 2:
                            h = v;
                            break;
                        case 3:
                            h = t;
                            break;
                        case 5:
                        case 4:
                            if (this.whitespacesVisible) {
                                this._parseString(e.getData(), f, d, r);
                                continue
                            } else h = r;
                            break;
                        case 8:
                            this._parseComment(e.getData(), f, d, m, a);
                            continue;
                        case 6:
                            this._parseComment(e.getData(), f, d, c, a);
                            continue;
                        case 7:
                            this._parseComment(e.getData(), f, d, i, a);
                            continue;
                        case 10:
                            this.whitespacesVisible && (h = u);
                            break;
                        case 11:
                            this.whitespacesVisible && (h = g)
                    }
                    d.push({
                        start: f,
                        end: e.getOffset() + b,
                        style: h
                    })
                }
            },
            _parseComment: function (a, b, c, d, e) {
                var f = this._commentScanner;
                f.setText(a);
                for (f.setType(e); a = f.nextToken();) {
                    var e = f.getStartOffset() + b,
                        h = d;
                    switch (a) {
                        case 10:
                            this.whitespacesVisible && (h = u);
                            break;
                        case 11:
                            this.whitespacesVisible && (h = g);
                            break;
                        case 12:
                            h = n;
                            break;
                        case 13:
                            h = q;
                            break;
                        case 14:
                            h = j;
                            break;
                        default:
                            this.detectHyperlinks && (h = this._detectHyperlinks(f.getData(), e, c, h))
                    }
                    h && c.push({
                        start: e,
                        end: f.getOffset() + b,
                        style: h
                    })
                }
            },
            _parseString: function (a, b, c, d) {
                var e = this._whitespaceScanner;
                for (e.setText(a); a = e.nextToken();) {
                    var f = e.getStartOffset() + b,
                        h = d;
                    switch (a) {
                        case 10:
                            this.whitespacesVisible && (h = u);
                            break;
                        case 11:
                            this.whitespacesVisible && (h = g)
                    }
                    h && c.push({
                        start: f,
                        end: e.getOffset() + b,
                        style: h
                    })
                }
            },
            _detectHyperlinks: function (a, b, c, d) {
                var e = null,
                    f;
                if ((f = a.indexOf("://")) > 0) {
                    for (var e = a,
                        g = f; g > 0;) {
                        f = e.charCodeAt(g - 1);
                        if (!(97 <= f && f <= 122 || 65 <= f && f <= 90 || 45 === f || 48 <= f && f <= 57)) break;
                        g--
                    }
                    if (g > 0 && (f = "\"\"''(){}[]<>".indexOf(e.substring(g - 1, g)), f !== -1 && (f & 1) === 0 && (f = e.lastIndexOf("\"\"''(){}[]<>".substring(f + 1, f + 2))) !== -1)) {
                        var h = f;
                        f = this._clone(d);
                        f.tagName = "a";
                        f.attributes = {
                            href: e.substring(g, h)
                        };
                        c.push({
                            start: b,
                            end: b + g,
                            style: d
                        });
                        c.push({
                            start: b + g,
                            end: b + h,
                            style: f
                        });
                        c.push({
                            start: b + h,
                            end: b + a.length,
                            style: d
                        });
                        return null
                    }
                } else a.toLowerCase().indexOf("bug#") === 0 && (e = "https://bugs.eclipse.org/bugs/show_bug.cgi?id=" + parseInt(a.substring(4), 10));
                return e ? (f = this._clone(d), f.tagName = "a", f.attributes = {
                    href: e
                },
                    f) : d
            },
            _clone: function (a) {
                if (!a) return a;
                var b = {},
                    c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                return b
            },
            _findComments: function (a, b) {
                var b = b || 0,
                    c = this._firstScanner,
                    d;
                c.setText(a);
                for (var e = []; d = c.nextToken();)(d === 7 || d === 8 || d === 5) && e.push({
                    start: c.getStartOffset() + b,
                    end: c.getOffset() + b,
                    type: d
                }),
                    (d === 6 || d === 7 || d === 8) && this._computeTasks(d, c.getStartOffset() + b, c.getOffset() + b);
                return e
            },
            _findMatchingBracket: function (a, b) {
                var c = "{}()[]<>",
                    d = a.getText(b, b + 1),
                    e = c.indexOf(d, 0);
                if (e === -1) return -1;
                var f;
                f = e & 1 ? c.substring(e - 1, e) : c.substring(e + 1, e + 2);
                for (var g = a.getLineAtOffset(b), c = a.getLine(g), h = a.getLineStart(g), i = a.getLineEnd(g), c = this._findBrackets(d, f, c, h, h, i), i = 0; i < c.length; i++)
                    if (h = c[i] >= 0 ? 1 : -1, c[i] * h - 1 === b) {
                        var j = 1;
                        if (e & 1) {
                            for (i--; i >= 0; i--)
                                if (h = c[i] >= 0 ? 1 : -1, j += h, j === 0) return c[i] * h - 1;
                            for (g -= 1; g >= 0;) {
                                c = a.getLine(g);
                                h = a.getLineStart(g);
                                i = a.getLineEnd(g);
                                c = this._findBrackets(d, f, c, h, h, i);
                                for (e = c.length - 1; e >= 0; e--)
                                    if (h = c[e] >= 0 ? 1 : -1, j += h, j === 0) return c[e] * h - 1;
                                g--
                            }
                        } else {
                            for (i++; i < c.length; i++)
                                if (h = c[i] >= 0 ? 1 : -1, j += h, j === 0) return c[i] * h - 1;
                            g += 1;
                            for (e = a.getLineCount(); g < e;) {
                                c = a.getLine(g);
                                h = a.getLineStart(g);
                                i = a.getLineEnd(g);
                                c = this._findBrackets(d, f, c, h, h, i);
                                for (i = 0; i < c.length; i++)
                                    if (h = c[i] >= 0 ? 1 : -1, j += h, j === 0) return c[i] * h - 1;
                                g++
                            }
                        }
                        break
                    }
                return -1
            },
            _findBrackets: function (a, b, c, d, e, f) {
                for (var g = [], a = a.charCodeAt(0), b = b.charCodeAt(0), h = e, i = this._scanner, j, k = this.comments, l = this._binarySearch(k, e, !0); l < k.length; l++) {
                    if (k[l].start >= f) break;
                    j = k[l].start;
                    var m = k[l].end;
                    if (h < j)
                        for (i.setText(c.substring(h - e, j - e)); j = i.nextToken();) j === a ? g.push(i.getStartOffset() + h - e + d + 1) : j === b && g.push(-(i.getStartOffset() + h - e + d + 1));
                    h = m
                }
                if (h < f)
                    for (i.setText(c.substring(h - e, f - e)); j = i.nextToken();) j === a ? g.push(i.getStartOffset() + h - e + d + 1) : j === b && g.push(-(i.getStartOffset() + h - e + d + 1));
                return g
            },
            _onDestroy: function () {
                this.destroy()
            },
            _onLineStyle: function (a) {
                if (a.textView === this.view) a.style = this._getLineStyle(a.lineIndex);
                a.ranges = this._getStyles(a.textView.getModel(), a.lineText, a.lineStart)
            },
            _onSelection: function (a) {
                var b = a.oldValue,
                    c = a.newValue,
                    d = this.view,
                    a = d.getModel(),
                    e;
                if (this.highlightCaretLine) {
                    var f = a.getLineAtOffset(b.start);
                    e = a.getLineAtOffset(c.start);
                    var g = c.start === c.end,
                        b = b.start === b.end;
                    f === e && b && g || (b && d.redrawLines(f, f + 1), (f !== e || !b) && g && d.redrawLines(e, e + 1))
                }
                if (this.annotationModel) {
                    var b = this._bracketAnnotations,
                        h, i;
                    if (c.start === c.end && (i = d.getCaretOffset()) > 0) i -= 1,
                        a.getBaseModel && (i = a.mapOffset(i), a = a.getBaseModel()),
                        a = this._findMatchingBracket(a, i),
                        a !== -1 && (h = [l.AnnotationType.createAnnotation(l.AnnotationType.ANNOTATION_MATCHING_BRACKET, a, a + 1), l.AnnotationType.createAnnotation(l.AnnotationType.ANNOTATION_CURRENT_BRACKET, i, i + 1)]);
                    this._bracketAnnotations = h;
                    this.annotationModel.replaceAnnotations(b, h)
                }
            },
            _onMouseDown: function (a) {
                if (a.clickCount === 2) {
                    var b = this.view,
                        c = b.getModel(),
                        d = b.getOffsetAtLocation(a.x, a.y);
                    if (d > 0) {
                        var e = d - 1,
                            f = c;
                        c.getBaseModel && (e = c.mapOffset(e), f = c.getBaseModel());
                        e = this._findMatchingBracket(f, e);
                        e !== -1 && (a.preventDefault(), a = e, c.getBaseModel && (a = c.mapOffset(a, !0)), d > a && (d--, a++), b.setSelection(a, d))
                    }
                }
            },
            _onModelChanged: function (a) {
                var b = a.start,
                    c = a.removedCharCount,
                    d = a.addedCharCount - c,
                    e = this.view,
                    a = e.getModel(),
                    f = a.getBaseModel ? a.getBaseModel() : a,
                    c = b + c,
                    g = f.getCharCount(),
                    h = this.comments.length,
                    i = f.getLineStart(f.getLineAtOffset(b)),
                    j = this._binarySearch(this.comments, i, !0),
                    k = this._binarySearch(this.comments, c, !1, j - 1, h);
                j < h && this.comments[j].start <= i && i < this.comments[j].end ? (i = this.comments[j].start, i > b && (i += d)) : i = j === h && h > 0 && g - d === this.comments[h - 1].end ? this.comments[h - 1].start : i;
                var m;
                k < h ? (m = this.comments[k].end, m > b && (m += d), k += 1) : (k = h, m = g);
                for (var n, g = this._findComments(f.getText(i, m), i), h = j; h < this.comments.length; h++) n = this.comments[h],
                    n.start > b && (n.start += d),
                    n.start > b && (n.end += d);
                var o = k - j !== g.length;
                if (!o)
                    for (h = 0; h < g.length; h++) {
                        n = this.comments[j + h];
                        var p = g[h];
                        if (n.start !== p.start || n.end !== p.end || n.type !== p.type) {
                            o = !0;
                            break
                        }
                    }
                h = [j, k - j].concat(g);
                Array.prototype.splice.apply(this.comments, h);
                o && (h = i, n = m, a !== f && (h = a.mapOffset(h, !0), n = a.mapOffset(n, !0)), e.redrawRange(h, n));
                if (this.foldingEnabled && f !== a && this.annotationModel) {
                    e = this.annotationModel;
                    j = e.getAnnotations(i, m);
                    i = [];
                    for (m = []; j.hasNext();)
                        if (n = j.next(), n.type === l.AnnotationType.ANNOTATION_FOLDING) {
                            m.push(n);
                            for (h = 0; h < g.length; h++)
                                if (n.start === g[h].start && n.end === g[h].end) break;
                            h === g.length ? (i.push(n), n.expand()) : (h = n.start, k = n.end, h > b && (h -= d), k > b && (k -= d), h <= b && b < k && h <= c && c < k && (h = f.getLineAtOffset(n.start), k = f.getLineAtOffset(n.end), h !== k ? n.expanded || (n.expand(), e.modifyAnnotation(n)) : e.removeAnnotation(n)))
                        }
                    b = [];
                    for (h = 0; h < g.length; h++) {
                        n = g[h];
                        for (d = 0; d < m.length; d++)
                            if (m[d].start === n.start && m[d].end === n.end) break;
                        d === m.length && (n = this._createFoldingAnnotation(a, f, n.start, n.end)) && b.push(n)
                    }
                    e.replaceAnnotations(i, b)
                }
            }
        };
        return {
            TextStyler: h
        }
    });
define("orion/editor/edit", "orion/editor/textView,orion/editor/textModel,orion/editor/textTheme,orion/editor/projectionTextModel,orion/editor/eventTarget,orion/keyBinding,orion/editor/rulers,orion/editor/annotations,orion/editor/tooltip,orion/editor/undoStack,orion/editor/textDND,orion/editor/editor,orion/editor/editorFeatures,orion/editor/contentAssist,orion/editor/cssContentAssist,orion/editor/htmlContentAssist,orion/editor/jsTemplateContentAssist,orion/editor/AsyncStyler,orion/editor/mirror,orion/editor/textMateStyler,orion/editor/htmlGrammar,examples/editor/textStyler".split(","),
    function (l, p, o, e, b, d, h, k, f, a, c, i, m, n, j, q, r, t, v, g, u, x) {
        function s(a) {
            var b = a.firstChild;
            if (b && b.tagName === "TEXTAREA") return b.value;
            var c = a.ownerDocument,
                d = c.defaultView || c.parentWindow,
                e;
            if (!(e = !d.getSelection)) {
                if (!(b = a.childNodes.length === 1 && b.nodeType === Node.TEXT_NODE)) {
                    for (var f, b = a; b && b !== c && f !== "none";) f = d.getComputedStyle ? d.getComputedStyle(b, null).getPropertyValue("display") : b.currentStyle.display,
                        b = b.parentNode;
                    b = f === "none"
                }
                e = b
            }
            if (e) return a.innerText || a.textContent;
            c = c.createRange();
            c.selectNode(a);
            a = d.getSelection();
            d = [];
            for (f = 0; f < a.rangeCount; f++) d.push(a.getRangeAt(f));
            a.removeAllRanges();
            a.addRange(c);
            c = a.toString();
            a.removeAllRanges();
            for (f = 0; f < d.length; f++) a.addRange(d[f]);
            return c
        }

        function C(a) {
            if (a.substring(0, 12) === "data-editor-") return a = a.substring(12),
                a = a.replace(/-([a-z])/ig,
                    function (a, b) {
                        return b.toUpperCase()
                    })
        }

        function H(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        }

        function K(a, b) {
            var c = {};
            H(c, b);
            for (var d, e = 0,
                f = a.attributes,
                g = f.length; e < g; e++) {
                d = f.item(e);
                var h = C(d.nodeName);
                if (h) {
                    d = d.nodeValue;
                    if (d === "true" || d === "false") d = d === "true";
                    c[h] = d
                }
            }
            return c
        }

        function L(a) {
            var b = a.ownerDocument,
                b = b.defaultView || b.parentWindow,
                c;
            if (b.getComputedStyle) c = b.getComputedStyle(a, null).getPropertyValue("height");
            else if (a.currentStyle) c = a.currentStyle.height;
            return parseInt(c, 10) || 0
        }

        function I(a) {
            var b = a.parent;
            b || (b = "editor");
            typeof b === "string" && (b = (a.document || document).getElementById(b));
            if (!b && a.className) {
                var c = (a.document || document).getElementsByClassName(a.className);
                if (c) {
                    a.className = void 0;
                    for (var d = [], f = 0; f < c.length; f++) a.parent = c[f],
                        d.push(I(a));
                    return d
                }
            }
            if (!b) throw "no parent";
            a = K(b, a);
            if (typeof a.theme === "string") {
                var c = o.TextTheme.getTheme(a.theme),
                    f = a.theme.lastIndexOf("/"),
                    h = a.theme;
                f !== -1 && (h = h.substring(f + 1));
                h.substring(h.length - 4) === ".css" && (h = h.substring(0, h.length - 4));
                c.setThemeClass(h, {
                    href: a.theme
                });
                a.theme = c
            }
            var k;
            a.readonly || (d = {
                createContentAssistMode: function (a) {
                    k = new n.ContentAssist(a.getTextView());
                    a = new n.ContentAssistWidget(k);
                    a = new n.ContentAssistMode(k, a);
                    k.setMode(a);
                    return a
                }
            });
            d = new i.Editor({
                textViewFactory: function () {
                    return new l.TextView({
                        parent: b,
                        model: new e.ProjectionTextModel(new p.TextModel("")),
                        tabSize: a.tabSize ? a.tabSize : 4,
                        readonly: a.readonly,
                        fullSelection: a.fullSelection,
                        tabMode: a.tabMode,
                        expandTab: a.expandTab,
                        themeClass: a.themeClass,
                        theme: a.theme,
                        wrapMode: a.wrapMode
                    })
                },
                undoStackFactory: new m.UndoFactory,
                annotationFactory: new m.AnnotationFactory,
                lineNumberRulerFactory: new m.LineNumberRulerFactory,
                foldingRulerFactory: new m.FoldingRulerFactory,
                textDNDFactory: new m.TextDNDFactory,
                contentAssistFactory: d,
                keyBindingFactory: new m.KeyBindingsFactory,
                statusReporter: a.statusReporter,
                domNode: b
            });
            c = a.contents;
            c === void 0 && (c = s(b));
            c || (c = "");
            d.installTextView();
            d.setLineNumberRulerVisible(a.showLinesRuler === void 0 || a.showLinesRuler);
            d.setAnnotationRulerVisible(a.showAnnotationRuler === void 0 || a.showFoldingRuler);
            d.setOverviewRulerVisible(a.showOverviewRuler === void 0 || a.showOverviewRuler);
            d.setFoldingRulerVisible(a.showFoldingRuler === void 0 || a.showFoldingRuler);
            d.setInput(a.title, null, c);
            ({
                styler: null,
                highlight: function (b, c) {
                    if (this.styler) this.styler.destroy(),
                        this.styler = null;
                    if (b) {
                        var d = c.getTextView(),
                            e = c.getAnnotationModel();
                        switch (b) {
                            case "js":
                            case "java":
                            case "css":
                                this.styler = new x.TextStyler(d, b, e);
                                c.setFoldingRulerVisible(a.showFoldingRuler === void 0 || a.showFoldingRuler);
                                break;
                            case "html":
                                this.styler = new g.TextMateStyler(d, new u.HtmlGrammar)
                        }
                    }
                }
            }).highlight(a.lang, d);
            if (k) {
                var q = new j.CssContentAssistProvider,
                    t = new r.JSTemplateContentAssistProvider;
                k.addEventListener("Activating",
                    function () {
                        / css$ /.test(a.lang) ? k.setProviders([q]) : /js$/.test(a.lang) && k.setProviders([t])
                    })
            }
            if (L(b) <= 50) c = d.getTextView().computeSize().height,
                b.style.height = c + "px";
            return d
        }
        var B = this.orion ? this.orion.editor : void 0;
        if (B)
            for (var F = 0; F < arguments.length; F++) H(B, arguments[F]);
        return I
    });
var orion = this.orion || (this.orion = {}),
    editor = orion.editor || (orion.editor = {});