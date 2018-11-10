$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        it('names are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });

   describe('The Menu', function() {
        
        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        
        it('menu works when clicked', function() {
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('are there any entries', function() {
           expect($('.entry').length > 0  && $('.feed').length > 0).toBe(true); 
        });
    });

    describe('New Feed Selection', function() {
        var entriesStart;
        var entriesEnd;
        
        beforeEach(function(done) {
           $('.feed').empty();
           loadFeed(0, function() {
               entriesStart = $('.feed').html();
               loadFeed(1, function() {
                   entriesEnd = $('.feed').html();
                   done();
           });
           });
           
        });
        
        it('new feed is new content', function() {
           expect(entriesStart).not.toBe(entriesEnd);
        });
    });
}());
