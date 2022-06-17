"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7893],{7893:function(n,t,r){r.r(t),t.default='const val POINTS_X_PASS: Int = 15\r\nval EZPassAccounts: MutableMap<Int, Int> = mutableMapOf(1 to 100, 2 to 100, 3 to 100)\r\nval EZPassReport: Map<Int, Int> = EZPassAccounts\r\n\r\n// update points credit\r\nfun updatePointsCredit(accountId: Int) {\r\n    if (EZPassAccounts.containsKey(accountId)) {\r\n        println("Updating $accountId...")\r\n        EZPassAccounts[accountId] = EZPassAccounts.getValue(accountId) + POINTS_X_PASS\r\n    } else {\r\n        println("Error: Trying to update a non-existing account (id: $accountId)")\r\n    }\r\n}\r\n\r\nfun accountsReport() {\r\n    println("EZ-Pass report:")\r\n    EZPassReport.forEach{\r\n        k, v -> println("ID $k: credit $v")\r\n    }\r\n}\r\n\r\nfun main() {\r\n    accountsReport()\r\n    updatePointsCredit(1)\r\n    updatePointsCredit(1)\r\n    updatePointsCredit(5)\r\n    accountsReport()\r\n}'}}]);
//# sourceMappingURL=7893.3998d2a3.chunk.js.map