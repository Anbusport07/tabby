(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{66756:function(n,e,t){Promise.resolve().then(t.bind(t,99968))},99968:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S},metadata:function(){return N}});var r=t(36164),s=t(40055),a=t(70410),i=t(99047),o=t(6230),d=t(3546),l=t(70652),u=t.n(l),c=t(97651),f=t.n(c),h=t(74630),m=t(99092),g=t.n(m),x=t(57288),b=t(81565),$=t(29),p=t(90379),j=t(17484);function v(n){let{count:e,activeClass:t,tooltip:s}=n;return(0,r.jsx)($.pn,{delayDuration:0,children:(0,r.jsxs)($.u,{children:[(0,r.jsx)($.aJ,{children:(0,r.jsx)("div",{className:(0,x.cn)("flex h-8 w-8 cursor-default items-center justify-center rounded-full",t),children:e||0})}),(0,r.jsx)($._v,{children:(0,r.jsx)("p",{children:s})})]})})}function I(n){let{name:e}=n,[{data:t,fetching:i}]=(0,s.aM)({query:a.yB,variables:{jobs:[e]}});return(0,r.jsx)(o.Z,{loading:i,fallback:(0,r.jsx)(p.tB,{className:"w-1/3"}),children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(v,{count:null==t?void 0:t.jobRunStats.success,activeClass:"bg-green-600 text-xs text-white",tooltip:"Success"}),(0,r.jsx)(v,{count:null==t?void 0:t.jobRunStats.pending,activeClass:"bg-blue-600 text-xs text-white",tooltip:"Pending"}),(0,r.jsx)(v,{count:null==t?void 0:t.jobRunStats.failed,activeClass:"bg-red-600 text-xs text-white",tooltip:"Failed"})]})})}function y(n){var e;let{name:t}=n,[{data:l,fetching:c}]=(0,s.aM)({query:a.GG,variables:{last:10,jobs:[t]}}),m=null==l?void 0:null===(e=l.jobRuns)||void 0===e?void 0:e.edges,v=(0,d.useMemo)(()=>null==m?void 0:m.slice().reverse(),[m]),y=null==v?void 0:v[0],N=null==v?void 0:v.find(n=>!!n.node.finishedAt),S=N?g()(N.node.finishedAt).format("YYYY-MM-DD HH:mm"):null;return(0,r.jsx)(o.Z,{loading:c,fallback:(0,r.jsx)(i.SC,{children:(0,r.jsx)(i.pj,{colSpan:4,children:(0,r.jsx)(p.tB,{})})}),children:(0,r.jsxs)(i.SC,{className:"h-16",children:[(0,r.jsx)(i.pj,{className:"font-bold",children:(0,j.Y)(t)}),(0,r.jsx)(i.pj,{children:(0,r.jsx)("div",{className:"grid grid-cols-5 flex-wrap gap-1.5  xl:flex",children:null==v?void 0:v.map(n=>{var e;let{createdAt:t,finishedAt:s,startedAt:a}=n.node,i=!s&&!!a,o=t&&g()(t).format("YYYY-MM-DD HH:mm"),d=null!==(e=a&&s&&f().humanizer({language:"shortEn",languages:{shortEn:{d:()=>"d",h:()=>"h",m:()=>"m",s:()=>"s"}}})(g().duration(g()(s).diff(a)).asMilliseconds(),{units:["d","h","m","s"],round:!1,largest:1,spacer:"",language:"shortEn"}))&&void 0!==e?e:null,l="";if(null!==d){let n=d.endsWith("s");if(n)l=d;else{let n=d.charAt(d.length-1),e=parseInt(d)+1;l=e+n}}return(0,r.jsx)($.pn,{delayDuration:0,children:(0,r.jsxs)($.u,{children:[(0,r.jsx)($.aJ,{asChild:!0,children:(0,r.jsxs)(u(),{href:"/jobs/detail?id=".concat(n.node.id),className:(0,x.cn)("flex h-8 w-8 items-center justify-center rounded text-xs text-white hover:opacity-70",{"bg-blue-600":(0,h.Z)(n.node.exitCode),"bg-green-600":0===n.node.exitCode,"bg-red-600":!(0,h.Z)(n.node.exitCode)&&0!==n.node.exitCode}),children:[l,i&&(0,r.jsx)(b.IconSpinner,{})]})}),(0,r.jsx)($._v,{children:o&&(0,r.jsx)("p",{children:o})})]})},n.node.id)})})}),(0,r.jsx)(i.pj,{children:(0,r.jsx)(u(),{href:"/jobs/detail?id=".concat(null==y?void 0:y.node.id),className:"flex items-center underline",children:(0,r.jsx)("p",{children:S})})}),(0,r.jsx)(i.pj,{children:(0,r.jsx)(I,{name:t})})]})})}let N={title:"Jobs"};function S(){let[{data:n,fetching:e}]=(0,s.aM)({query:a.DQ});return(0,r.jsx)(o.Z,{loading:e,children:(0,r.jsxs)(i.iA,{children:[(0,r.jsx)(i.xD,{children:(0,r.jsxs)(i.SC,{children:[(0,r.jsx)(i.ss,{className:"w-[20%]",children:"Job"}),(0,r.jsx)(i.ss,{className:"w-56 xl:w-auto",children:"Recent Tasks"}),(0,r.jsx)(i.ss,{className:"w-auto xl:w-[20%]",children:"Last Run"}),(0,r.jsx)(i.ss,{className:"w-[20%]",children:"Job Runs"})]})}),(0,r.jsx)(i.RM,{children:null==n?void 0:n.jobs.map(n=>(0,r.jsx)(y,{name:n},n))})]})})}},17484:function(n,e,t){"use strict";t.d(e,{H:function(){return i},Y:function(){return a}});var r=t(74630);let s={scheduler_git:"Git",scheduler_github_gitlab:"Github / Gitlab",web_crawler:"Docs"};function a(n){return n in s?s[n]:n}function i(n){return n?(0,r.Z)(n.exitCode)?n.startedAt?"Running":"Pending":0===n.exitCode?"Success":"Failed":"Pending"}},6230:function(n,e,t){"use strict";var r=t(36164),s=t(3546),a=t(24449),i=t(90379);e.Z=n=>{let{loading:e,fallback:t,delay:o,children:d}=n,[l,u]=s.useState(!e),[c]=(0,a.n)(l,null!=o?o:200);return(s.useEffect(()=>{e||l||u(!0)},[e]),c)?d:t||(0,r.jsx)(i.cg,{})}},90379:function(n,e,t){"use strict";t.d(e,{PF:function(){return d},cg:function(){return i},tB:function(){return o}});var r=t(36164),s=t(57288),a=t(3448);let i=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",e),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},o=n=>{let{className:e,...t}=n;return(0,r.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",e),...t})},d=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",e),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},3448:function(n,e,t){"use strict";t.d(e,{O:function(){return a}});var r=t(36164),s=t(57288);function a(n){let{className:e,...t}=n;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-border",e),...t})}},99047:function(n,e,t){"use strict";t.d(e,{RM:function(){return d},SC:function(){return u},iA:function(){return i},pj:function(){return f},ss:function(){return c},xD:function(){return o}});var r=t(36164),s=t(3546),a=t(57288);let i=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("table",{ref:e,className:(0,a.cn)("w-full caption-bottom text-sm",t),...s})});i.displayName="Table";let o=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("thead",{ref:e,className:(0,a.cn)("[&_tr]:border-b",t),...s})});o.displayName="TableHeader";let d=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tbody",{ref:e,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...s})});d.displayName="TableBody";let l=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tfoot",{ref:e,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});l.displayName="TableFooter";let u=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tr",{ref:e,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});u.displayName="TableRow";let c=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("th",{ref:e,className:(0,a.cn)("h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let f=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("td",{ref:e,className:(0,a.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let h=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("caption",{ref:e,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...s})});h.displayName="TableCaption"},29:function(n,e,t){"use strict";t.d(e,{_v:function(){return u},aJ:function(){return l},pn:function(){return o},u:function(){return d}});var r=t(36164),s=t(3546),a=t(44421),i=t(57288);let o=a.zt,d=a.fC,l=a.xz;a.h_;let u=s.forwardRef((n,e)=>{let{className:t,sideOffset:s=4,...o}=n;return(0,r.jsx)(a.VY,{ref:e,sideOffset:s,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...o})});u.displayName=a.VY.displayName},24449:function(n,e,t){"use strict";t.d(e,{S:function(){return o},n:function(){return d}});var r=t(3546),s=t(45391),a=t(16784);let i=n=>{let e=(0,a.d)(n);r.useEffect(()=>()=>{e.current()},[])};function o(n,e,t){let o=(0,a.d)(n),d=r.useMemo(()=>(0,s.Z)(function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return o.current(...e)},e,t),[]);return i(()=>{var n;null==t||null===(n=t.onUnmount)||void 0===n||n.call(t,d),d.cancel()}),{run:d,cancel:d.cancel,flush:d.flush}}function d(n,e,t){let[s,a]=r.useState(n),{run:i}=o(()=>{a(n)},e,t);return r.useEffect(()=>{i()},[n]),[s,a]}},16784:function(n,e,t){"use strict";t.d(e,{d:function(){return s}});var r=t(3546);function s(n){let e=r.useRef(n);return e.current=n,e}},70410:function(n,e,t){"use strict";t.d(e,{Cl:function(){return c},D7:function(){return g},DQ:function(){return d},GG:function(){return i},Gx:function(){return x},S1:function(){return a},TH:function(){return l},XL:function(){return p},Y6:function(){return u},g0:function(){return I},gI:function(){return b},hA:function(){return $},kb:function(){return f},lE:function(){return s},md:function(){return v},r4:function(){return j},ts:function(){return h},yB:function(){return o},zz:function(){return m}});var r=t(43240);let s=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),d=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),l=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),u=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,r.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,r.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),h=(0,r.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),m=(0,r.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),g=(0,r.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n"),x=(0,r.BX)("\n  query ContextInfo {\n    contextInfo {\n      sources {\n        id\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n"),b=(0,r.BX)("\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"),$=(0,r.BX)("\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n"),p=(0,r.BX)("\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),j=(0,r.BX)("\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              __typename\n              ... on MessageAttachmentWebDoc {\n                title\n                link\n                content\n              }\n              ... on MessageAttachmentIssueDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                closed\n              }\n              ... on MessageAttachmentPullDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                merged\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),v=(0,r.BX)("\n  mutation SetThreadPersisted($threadId: ID!) {\n    setThreadPersisted(threadId: $threadId)\n  }\n"),I=(0,r.BX)("\n  query Notifications {\n    notifications {\n      id\n      content\n      read\n      createdAt\n    }\n  }\n")}},function(n){n.O(0,[8415,7565,7430,55,7812,4007,4752,3449,4421,7651,6312,7288,1565,3240,3375,5289,1744],function(){return n(n.s=66756)}),_N_E=n.O()}]);