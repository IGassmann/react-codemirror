(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[586],{886:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='[MODULE_PARAMETERS]\n# This section shall contain the values of all parameters that are defined in your TTCN-3 modules.\n\n[LOGGING]\n# In this section you can specify the name of the log file and the classes of events\n# you want to log into the file or display on console (standard error).\n\nLogFile := "logs/%e.%h-%r.%s"\nFileMask := LOG_ALL | DEBUG | MATCHING\nConsoleMask := ERROR | WARNING | TESTCASE | STATISTICS | PORTEVENT\n\nLogSourceInfo := Yes\nAppendFile := No\nTimeStampFormat := DateTime\nLogEventTypes := Yes\nSourceInfoFormat := Single\nLogEntityName := Yes\n\n[TESTPORT_PARAMETERS]\n# In this section you can specify parameters that are passed to Test Ports.\n\n[DEFINE]\n# In this section you can create macro definitions,\n# that can be used in other configuration file sections except [INCLUDE].\n\n[INCLUDE]\n# To use configuration settings given in other configuration files,\n# the configuration files just need to be listed in this section, with their full or relative pathnames.\n\n[EXTERNAL_COMMANDS]\n# This section can define external commands (shell scripts) to be executed by the ETS\n# whenever a control part or test case is started or terminated.\n\nBeginTestCase := ""\nEndTestCase := ""\nBeginControlPart := ""\nEndControlPart := ""\n\n[EXECUTE]\n# In this section you can specify what parts of your test suite you want to execute.\n\n[GROUPS]\n# In this section you can specify groups of hosts. These groups can be used inside the\n# [COMPONENTS] section to restrict the creation of certain PTCs to a given set of hosts.\n\n[COMPONENTS]\n# This section consists of rules restricting the location of created PTCs.\n\n[MAIN_CONTROLLER]\n# The options herein control the behavior of MC.\n\nTCPPort := 0\nKillTimer := 10.0\nNumHCs := 0\nLocalAddress :=\n'}}]);
//# sourceMappingURL=586.8b1241b6.chunk.js.map