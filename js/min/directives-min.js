IASR.directive("iasrArticleHeader",function(){return{restrict:"E",scope:{title:"=",date:"="},template:"<h1>{{ ::playlist.title }}</h1><p class=\"date\">{{ ::playlist.date | date : 'longDate' }}</p>"}});